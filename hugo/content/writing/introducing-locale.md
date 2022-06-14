---
title: Introducing Locale
description: Introducing Locale, a polyfill to understand your users’ preferred languages.
layout: post
date: 2017-06-20T07:40:00+02:00
draft: false
---

# Introducing Locale

Today, I’m publishing a tiny api called [Locale](https://locale.now.sh) which is meant to polyfill `window.navigator.languages` for internationalized apps.

## A better internationalization experience

At the moment, it’s pretty common for internationalized apps to either serve the primary language for the user, or serve the language the owner uses most and provide a drop down to change the language. On server-rendered applications, the `Accept-Language` header is available to get a list of the user’s preferred languages. This way, you can serve their primary language (if you support it), and prioritize alternatives based on their other system languages.

There’s a gap, however, for single page applications. As of this writing, only Chrome and Firefox support [`window.navigator.languages`](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/languages). This means that there’s no consistent way to know which languages a user speaks, and in which order, on the front end. Enter Locale, a public API to consistently get that list.

With this list, you can immediately present the site in a language the user understands (providing you support those languages), and prioritize alternatives if they want to switch. This provides a much better initial experience for users of your app or site.

## Getting started

The API is meant to be small and fast for the least amount of work on your end. You can view the "docs" at [locale.now.sh](https://locale.now.sh), and view your list of languages by viewing that site or going to [locale.now.sh/api](https://locale.now.sh/api) in your browser.

To use it within your app (front or back end!), make a `GET` request to `https://locale.now.sh/api`. You can expect a JSON array as the response to do whatever you want with. That’s it!

## Locale’s architecture

Locale is written entirely in [Rust](https://www.rust-lang.org) using [Rocket](https://rocket.rs) as the webserver and hosted on Zeit’s [now.sh](https://now.sh). I created a crate called [accept-language](https://crates.io/crates/accept-language) which is being used to parse the `Accept-Language` header. If you’re using Rust, feel free to use it within your own webserver!

The overview page is built in plain HTML and JavaScript, and uses [tachyons](https://tachyons.io) for that sweet functional CSS.

## Call for contributors

As this library is a polyfill for internationalization, it would be a shame not to provide various languages for the Locale docs. Unfortunately like most Americans, I only speak English and can’t add any other languages myself. If you speak multiple languages, I would love to have your help in translating the page! You can submit an [issue](https://github.com/mike-engel/locale/issues/new) or [pull request](https://github.com/mike-engel/locale/pulls/new) through github.

The code is fully [open source](https://github.com/mike-engel/locale) and open to any and all issues and pull requests beyond internationalization.

Thanks for reading, and I hope you find Locale useful in whatever you build!
