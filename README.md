# html

**HTML is The BEST templating language EVER**.

It was heavily inspired by [Jade](http://github.com/visionmedia/jade) from [Visionmedia](http://github.com/visionmedia/)

## Features

 - HTML is valid (X) HTML 4.01 and HTML5
 - HTML is Insanely Fast 
 - Safari, Internet Explorer, Chrome, and Firefox are all specifically optimized for HTML
 - HTML allows the seamless binding of data through CSS tag selectors
 - HTML is `< 4 bytes` in size!
 - I'm annoyed I had to build this. 
 
*Note: I have no idea how to successfully use [Weld](https://github.com/hij1nx/weld) or [Plates](https://github.com/flatiron/plates).*

## Core Concepts 

 - I know HTML. So you do?
 - It's not possible to write **any** templating logic in HTML
 - Data could be bound via CSS classes
 - A context may be set for any render using a CSS selector ( a partial! )
 - That's it.

## Examples

### Rendering basic data

```html
<p class="name">name placeholder</p>
```

```js
var html = require('html-lang');
console.log(html.render({ name: "Bob" }, html));
```

```html
<p class="name">Bob</p>
```

### Rendering an Object

```html
<div class="user">
  <p class="name">name placeholder</p>
  <p class="email">email placeholder</p>
</div>
```

```js
var html = require('html-lang');

var user = { user: { name: "Bob", email: "bob@bob.com" }};

console.log(html.render(user, tmpl));
```

**outputs:**

```html
<div>
  <p class="name">Bob</p>
  <p class="email">bob@bob.com</p>
</div>
```

### Rendering an Array of Objects ( collection )

```html
<div class="users">
  <div class="user">
    <p class="name">name placeholder</p>
    <p class="email">email placeholder</p
  </div>
</div>
```

```js
var html = require('html-lang');

var users = [ 
  { name: "Bob", email: "bob@bob.com"}, 
  { name: "Marak", email: "marak@marak.com"}
];

console.log(html.render(users, tmpl));
```

```html
<div>
  <div>
    <p>Bob</p>
    <p>bob@bob.com</p>
  </div>
  <div>
    <p>Marak</p>
    <p>marak@marak.com</p>
  </div>
</div>
```

### Rendering a Partial with a CSS Selector

**Set to a context of where the render should occur.**

```html
<div id="top-section">
  <p class="name">name placeholder</p>
</div>
<div id="bottom-section">
  <p class="name">name placeholder</p>
</div>
```

```js
var html = require('html-lang');
console.log(html.render("#top-section", { name: "Bob" }, tmpl));
```

```html
<div id="top-section">
  <p>Bob</p>
</div>
```

# That's it. I challenge you to find a more complex use-case.