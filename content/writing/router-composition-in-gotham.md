+++
title = "Router Composition in Gotham"
description = "As a web developer interested in Rust, I’m always excited when new web frameworks come out for Rust. Over time I’ve tried Hyper and Rocket, both of which are great projects but for various reasons don’t resonate with how I like to write web servers. Near the end of 2017, however, a new framework called Gotham came out that I’m increasingly excited about."
date = "2018-01-01T01:23:00+02:00"
draft = false
+++

# Router composition in Gotham

As a web developer interested in [Rust](https://rust-lang.org), I’m always excited when a new web frameworks comes out for Rust. Over time I’ve tried [Hyper](https://hyper.rs) and [Rocket](https://rocket.rs), both of which are great projects but for various reasons don’t resonate with how I like to write web servers. Near the end of 2017, however, a new framework called [Gotham](https://gotham.rs) came out that I’m increasingly excited about.

As of this writing Gotham is at `0.1.2`, so it’s still young and could change a lot. Despite that, I feel like it has a lot of promise based on what’s out there now and where they’re planning on going. Reading through their example projects, however, I could never really get behind the way they set up routing. For small projects where all of your functions are in the same file, it works great. As your app starts to grow, however, the cognitive overhead increases and it feels frustrating to continue jumping back and forth between contexts.

If you come from a [Node.js](https://nodejs.org) background like me, you’ve almost certainly used [express](https://expressjs.com) as a webserver. It’s a really great framework and what I tend to compare all others to. One of it’s cooler features is router composition. With that you could create many sub routers and then combine them all at the top level of your app, usually in or near the entry point of your code. Generally, these sub routers are defined in the same file that your handlers are defined, keeping related concepts together in files/modules.

A quick note: I’m a big fan of express. If you’re _not_ a big fan of how you create servers with it, you may not like what I’m about to show. Everyone’s different!

Before jumping into the rust side, let’s take a quick look at how this works in express today.

**/src/index.js**

```
// server entrypoint
const express = require("express");
const { apiRouter } = require("./routes/api");

const app = express();

app.use("/api", apiRouter);

app.listen(3000);
```

**/src/routes/api/index.js**

```
const { Router } = require("express");
const { pingRouter } = require("./ping");
const { usersRouter } = require("./users");

const apiRouter = Router();

apiRouter.use("/ping", pingRouter);
apiRouter.use("/users", usersRouter);

export apiRouter;
```

**/src/routes/api/ping.js**

```
const { Router } = require("express");

const pingRouter = Router();

// this will resolve to `/api/ping`
pingRouter.route("/").get((req, res) => { res.send(204); });

export pingRouter;
```

**/src/routes/api/users.js**

```
const { Router } = require("express");

const usersRouter = Router();

// this will resolve to `/api/users`
usersRouter.route("/").get((req, res) => {
    console.log("Return some information about your users");
    res.send(200, "");
});

export usersRouter;
```

That’s a very brief example that hopefully demonstrates the potential of router composition. It may seem a little verbose to have the `ping` and `users` routers in separate files, but as your app grows it makes things much easier in my experience.

Now, given how express handles router composition, how can we apply that to Gotham? It’s not going to have the exact same implementation due to the way Rust works, but we can get pretty close!

Let’s take the same functionality above and create it with Gotham! The following code are snippets to keep things focused. I’ve set up an [example project](https://github.com/mike-engel/gotham-router-composition) where you can download and play with this implementation.

**/src/main.rs**

```
mod routes;

fn main() {
    let addr = "0.0.0.0:7878".parse().unwrap();
    let server = Http::new()
        .bind(&addr, NewHandlerService::new(routes::router()))
        .unwrap();

    server.run().unwrap();
}
```

**/src/routes/mod.rs**

```
pub mod api;

# this is a helper function to setup a handler for a route from the gotham examples
pub fn static_route<NH>(methods: Vec<Method>, new_handler: NH) -> Box<Route + Send + Sync>
where
    NH: NewHandler + 'static,
{
    let matcher = MethodOnlyRouteMatcher::new(methods);
    let pipeline_set = finalize_pipeline_set(new_pipeline_set());
    let extractors: Extractors<NoopPathExtractor, NoopQueryStringExtractor> = Extractors::new();
    let dispatcher = DispatcherImpl::new(new_handler, (), pipeline_set);
    let route = RouteImpl::new(matcher, Box::new(dispatcher), extractors, Delegation::Internal);

    Box::new(route)
}

pub fn router() -> Router {
    # this is the root of the router, a "Tree" in Gotham terms
    let mut tree_builder = TreeBuilder::new();

    # this server only has routes under `/api`, but you could
    # add more children!
    tree_builder.add_child(api::router());

    let tree = tree_builder.finalize();

    let response_finalizer_builder = ResponseFinalizerBuilder::new();
    let response_finalizer = response_finalizer_builder.finalize();

    Router::new(tree, response_finalizer)
}
```

**/src/routes/api/mod.rs**

```
# this is the entry point for our API routes
pub mod ping;
pub mod users;

pub fn router() -> NodeBuilder {
  let mut node = NodeBuilder::new("api", SegmentType::Static);

  node.add_child(ping::router());
  node.add_child(users::router());

  node
}
```

**/src/routes/api/ping.rs**

```
pub fn router() -> NodeBuilder {
    let mut node = NodeBuilder::new("ping", SegmentType::Static);

    node.add_route(static_route(vec![Method::Get], || Ok(get)));

    node
}

pub fn get(state: State, _req: Request) -> (State, Response) {
    let res = create_response(&state, StatusCode::NoContent, None);

    (state, res)
}
```

**/src/routes/api/users.rs**

```
pub fn router() -> NodeBuilder {
    let mut node = NodeBuilder::new("users", SegmentType::Static);

    node.add_route(static_route(vec![Method::Get], || Ok(get)));

    node
}

pub fn get(state: State, _req: Request) -> (State, Response) {
    let res = create_response(&state, StatusCode::Ok, Some("".to_owned().as_bytes, mime::TEXT_PLAIN);

    (state, res)
}
```

With that, we almost have the same structure as the express app. Rather than having all of our routes declared in a single place that you need to keep going back to, we now have them included in every file. This makes maintenance and refactoring easier. I also think it makes development easier since you don’t need to jump between contexts to add or remove functionality.

If you have even better ideas or found a typo/bug I would love to hear about them! The Rust web space is just starting, but it’s incredibly exciting to see where it’s going.
