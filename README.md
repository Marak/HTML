# html

**The BEST templating language EVER**.

Heavily inspired by [Jade](http://github.com/visionmedia/jade) from [Visionmedia](http://github.com/visionmedia/)

## Features

 - Valid (X)HTML syntax ( list all versions )
 - 100% compatible in all browsers ( list all engines )
 - Seamless data binding provided via CSS tags

## Core Concepts 

 - I know HTML.
 - Data will attempt to bind to `data-bind` HTML5 data attributes.
 - You may set a context for the render using a CSS selector
 - Thats fucking it.

## Examples

### Basic data binding


```js
var html = require('html-lang');
var tpl = '<p data-bind="name">name placeholder</p>';
console.log(html.render("Bob", tpl));
```

```html
<p>Bob</p>
```

### Object data binding

```js
var html = require('html-lang');

var tpl = '<div data-bind="user">
            <p data-bind="name">name placeholder</p>
            <p data-bind="email">email placeholder</p>
           </div>';

console.log(html.render({ user: { name: "Bob", email: "bob@bob.com"}}, tpl));
```

**outputs:**

```html
<div>
  <p>Bob</p>
  <p>bob@bob.com</p>
</div>
```

### Array of Objects ( collection ) data binding

```js
var html = require('html-lang');
var tpl = '<div data-bind="users">
             <div data-bind="user">
               <p data-bind="name">name placeholder</p>
               <p data-bind="email">email placeholder</p
             </div>
           </div>';
console.log(html.render({ users: [ 
  { name: "Bob", email: "bob@bob.com"}, 
  { name: "Marak", email: "marak@marak.com"}
], tpl));
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