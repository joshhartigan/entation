Entation
========

Life-savingly simple HTML presentations.

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

## Example

If you'd like to see the example that is in this repository, clone this repository, and view 'example.html' in your browser. There will probably be issues with Internet Explorer, but I haven't tested.
