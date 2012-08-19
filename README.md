# html

**The BEST templating language EVER**.

Heavily inspired by [Jade](http://github.com/visionmedia/jade) from [Visionmedia](http://github.com/visionmedia/)

## Features

 - Valid (X)HTML syntax ( list all versions )
 - Insanely Fast 
 - 100% compatible with all browsers ( list all engines )
 - Seamless data binding provided via CSS tags
 - I'm pretty annoyed I had to build this

## Core Concepts 

 - I know HTML.
 - Data will attempt to bind to CSS classes
 - You may set a context for the render using a CSS selector ( partials )
 - That's it.

## Examples

### Basic data binding

**html template**

```html
  <p class="name">name placeholder</p>
```

```js
var html = require('html-lang');
console.log(html.render({ name: "Bob" }, tpl));
```

```html
<p>Bob</p>
```

### Object data binding

**html template**

```html
<div class="user">
  <p class="name">name placeholder</p>
  <p class="email">email placeholder</p>
</div>
```

```js
var html = require('html-lang');

var user = { user: { name: "Bob", email: "bob@bob.com"}};

console.log(html.render(user, tpl));
```

**outputs:**

```html
<div>
  <p>Bob</p>
  <p>bob@bob.com</p>
</div>
```

### Array of Objects ( collection ) data binding

**html template**

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

console.log(html.render(users, tpl));
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

### CSS Selectors / Partials

**Set to a context of where the render should occur.**

**html template**

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
console.log(html.render("#top-section", { name: "Bob" }, tpl));
```

```html
<div id="top-section">
  <p>Bob</p>
</div>
```

# That's it. I challenge you to find a more complex use-case.