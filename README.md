Entation
========

Life-savingly simple HTML presentations.

Entation comes in two flavours: Read below for instructions for entation.js, and click [here](#entation-light) for entation.light.js, which doesn't require jQuery.

## Getting Started
Entation is *really* easy to use. You don't even need any CSS or JavaScript knowledge, just basic HTML.

Link jQuery and entation.js to your HTML file:

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="js/entation.js"></script>
```

To create a slide, use the class 'slide' followed by the slide's number - you must start with 1, but the order of the elements do not matter (it would be best practice to order them by number, however).

```html
<div class="slide 1">
  <p>Hello, world!</p>
</div>

<div class="slide 2">
  <p>Hello again, people!</p>
</div>
```

Entation will do **everything else** for you, and only the first slide will be visible by default.

## Controls

The controls are also simple - any key goes forward, except for `p`, which goes back.

### More control

The button for going to the previous slide can be assigned to a different key, or to multiple keys. Line 4 in entation.js:

```javascript
var PREVIOUS_KEYCODES = [112];
```

can be edited to contain any JavaScript keycodes, and - as always - entation will do the rest by implementing them as previous-slide-buttons. Keycodes for JavaScript can be found at [this helpful page](http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes).

## [Example](http://joshhartigan.github.io)

--------------

## Entation Light
If for some reason you do not want to use jQuery in your project, there is a 'light' version of entation which can work without it - with some drawbacks.

### Disadvantages
1. No fade in/out effect.
1. Every other thing on your webpage will have to be manually positioned - the entation will be `position: absolute; top: 5px;`.
1. **Important:** All the slides in an entation.light presentation must be inside an element with the class 'entation'.
1. A minor disadvantage - the entation.light.js file is bigger than entation.js (quite ironically), and will marginally increase loading time.
