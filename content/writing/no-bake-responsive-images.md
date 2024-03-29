+++
title = "No Bake Responsive Images"
description = "So you want to use images on your site. You’re also concerned about performance and bandwidth. You’ve heard about this new thing called “responsive images”. They sound pretty great. You can use different sized images for different sized screens. You can even show one image on mobile, and another on desktop. Then it dawns on you. You have 20 photos on your site. You have four breakpoints in your CSS. That could be up to 80 photos you have to manage. Fret not. We’re going to use the internet."
date = "2016-02-28T08:15:00+02:00"
draft = false
+++

# No-bake responsive images

So you want to use images on your site. You’re also concerned about performance and bandwidth. You’ve heard about this new thing called “responsive images”. They sound pretty great. You can use different sized images for different sized screens. You can even show one image on mobile, and another on desktop. Then it dawns on you. You have 20 photos on your site. You have four breakpoints in your CSS. That could be up to 80 photos you have to manage. Fret not. We’re going to use the internet.

## A preamble

So, you’re reading this and maybe you haven’t used responsive images before. Maybe you’ve heard of responsive web design, but not responsive images. Let me briefly explain what they are and why they exist.

Since the dawn of the `<img>` tag, images have become really easy to add to a webpage. That comes at a cost though. As we got into the age of 27" monitors, retina screens, smartphones, and now 5K displays, we’ve found ourselves delivering megabytes of data to all screens on all connections. A group of people knew it could be better and formed the [Responsive Issues Community Group](http://ricg.io) to solve this problem (and more like it as time goes on). Out comes **srcset**, **sizes**, and **picture**. This is supposed to be a brief tour, so instead I’m going to point you to Eric Portis’ excellent post, [Srcset & Sizes](http://ericportis.com/posts/2014/srcset-sizes/). You should also read the [Picturefill demo site](https://scottjehl.github.com/picturefill), which contains a bunch of examples on srcset, sizes, and picture.

If you want a single image’s content on all screen sizes, but want to serve the minimum number of pixels needed for the screen, the markup looks a little like this:

```html
<img
  src="fallback.jpg"
  srcset="small.jpg 320w, medium.jpg 768w, large.jpg 1024w, superHuge.jpg 5000w"
  sizes="(min-width: 1024px) 50vw, 100vw"
/>
```

Want to show one image optimized for mobile, and another for desktop? Picture’s got you covered.

```html
<picture>
  <source srcset="desktop-1024.jpg 1024w, desktop-5000.jpg 5000w" media="(min-width: 1024px)>
  <source srcset="mobile-320.jpg 320w, mobile-768.jpg 768w" media="(min-width: 320px)>
  <img src="fallback.jpg" />
</picture>
```

This is great — we’ve now got the ability to save user’s bandwidth and serve different photos on different screen sizes. But if you’re looking at those srcset attributes and thinking, “wow, that’s a lot of images to create and maintain.” I feel you. Sure there are tools for gulp and grunt and some other build tool I’m sure, but you still have to create and maintain a config file, manage all those images on your server, recompile all of them if the image changes, yadda yadda yadda.

## Cloud processing? Cloud processing.

If you’re tired of hearing about the cloud, I’m sorry. But hear me out because the cloud may just make implementing responsive images as easy as an `<img>` tag.

The two services I know of (there are probably more) are [Imgix](http://www.imgix.com/) and [Cloudinary](http://cloudinary.com/). If you’ve never heard of them, they allow you to customize and change images using query parameters in your URL. They can do a lot of really cool things, but I’m only going to touch on one feature here: _scaling_. You’ve probably guessed where this is going by now.

We’re going to upload _one_ really big master image and let the cloud handle the different sizes we need. Let’s get to an example. Remember the simple img example we had before? Here’s what it looks like with _the cloud_.

```html
<img
  src="https://res.cloudinary.com/beardfury/image/upload/c_scale,w_1000/v1444865801/forest.jpg"
  srcset="
    https://res.cloudinary.com/beardfury/image/upload/c_scale,w_320/v1444865801/forest.jpg   320w,
    https://res.cloudinary.com/beardfury/image/upload/c_scale,w_768/v1444865801/forest.jpg   768w,
    https://res.cloudinary.com/beardfury/image/upload/c_scale,w_1024/v1444865801/forest.jpg 1024w,
    https://res.cloudinary.com/beardfury/image/upload/c_scale,w_5000/v1444865801/forest.jpg 5000w
  "
  sizes="(min-width: 1024px) 50vw, 100vw"
/>
```

Want those different images on mobile and desktop? Well, you have to upload _two_ photos now, but it’s still better than 5.

```html
<picture>
  <source
    srcset="
      https://res.cloudinary.com/beardfury/image/upload/c_scale,w_1024/v1444865801/forest.jpg 1024w,
      https://res.cloudinary.com/beardfury/image/upload/c_scale,w_5000/v1444865801/forest.jpg 5000w
    "
    media="(min-width: 1024px)"
  />
  <source
    srcset="
      https://res.cloudinary.com/beardfury/image/upload/c_scale,w_320/v1444865801/forest.jpg 320w,
      https://res.cloudinary.com/beardfury/image/upload/c_scale,w_768/v1444865801/forest.jpg 768w
    "
    media="(min-width: 320px)"
  />
  <img
    src="https://res.cloudinary.com/beardfury/image/upload/c_scale,w_1000/v1444865801/forest.jpg"
    alt="Green forest scene"
  />
</picture>
```

Image management? Piece of cake. It’s like it used to be again. You know, the good old days of `<img>` before all this responsive stuff came about. The days where we used one _huge_ image to cover all bases and forced the user to wait 30 seconds for that 24 megapixel picture of a cat to download.

## One up

You might be thinking this is cool, but you’ve still got to manage all those pesky urls in your markup. I mean, it’s still way easier, but yeah, it can be better. If you’re using a templating system like Handlebars or EJS, _it’s time to get crazy_.

Because I prefer EJS, these examples are going to be written with EJS. First, let’s write a function to create **src** and **srcset** strings for us.

```jsx
function generateResponsiveString(filename, widths, isFallback) {
  "use strict";

  const urlPrefix = "https://res.cloudinary.com/beardfury/image/upload/c_scale,w_";

  let fullString = "";

  if (isFallback) {
    return urlPrefix + widths + filename;
  }

  widths.forEach(function(width) {
    fullString += urlPrefix + width + filename + " " + width + "w, ";
  });

  // strip the trailing comma and space
  return fullString.substr(0, fullString.length - 2);
}
```

Ok, cool. Now let’s use it in a template.

```html
<div class="portfolio-item-1">
  <img src="<%= responsiveImageString('v1444865801/forest.jpg', 1000, true) %>" srcset="<%=
  responsiveImageString('v1444865801/forest.jpg', [320, 768, 1024, 5000]) %>" sizes="(min-width:
  1024px) 50vw, 100vw) alt="Green forest scene">
</div>
```

Responsive images. Using the cloud. Without much typing. Barely any typing at all.

## Use it right now

Go on, try it. [Cloudinary](http://cloudinary.com/) is free to start and then starts pricing in tiers and plugins. [Imgix](https://www.imgix.com/) charges a couple bucks for a bunch of photos, with bandwidth on top of that. I’ll let you choose which you like best. If you want a self-hosted solution, a quick search on github produced two options written in Go: [pixlserv](https://github.com/ReshNesh/pixlserv) and [imaginary](https://github.com/h2non/imaginary).

You’re also going to want to use [Picturefill](https://github.com/scottjehl/picturefill), the responsive image polyfill. Why? Unfortunately, not all browsers support **picture**, and older ones don’t even support **srcset** or **sizes**.

Want to play around with this or see it in action? Here’s a [codepen](http://codepen.io/mike-engel/pen/avLVvW) for you.

Client hints are something to keep an eye on, as they’re going to make this process _even easier_. For more info, check out this post by [imgix](https://blog.imgix.com/2015/10/13/next-generation-responsive-images-with-client.html).

Use your new spare time to learn something cool.
