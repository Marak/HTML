# HTML is The BEST JavaScript templating language EVER

**HTML was heavily inspired by [Jade](http://github.com/visionmedia/jade) from [Visionmedia](http://github.com/visionmedia/)**

## Features

 - HTML is valid (X) HTML 4.01 and HTML5!
 - HTML is Insanely Fast !
 - Safari, Internet Explorer, Chrome, and Firefox are all specifically optimized for rendering HTML!
 - HTML is highly portable ( Even tested it in Microsoft Frontpage and Macromedia Dreamweaver )
 - HTML is `< 4 bytes` in size!
 - It's not possible to write logic in HTML
 - I'm pretty annoyed I had to build this. 
 
*Note: I have no fucking clue how to successfully use [Weld](https://github.com/hij1nx/weld) or [Plates](https://github.com/flatiron/plates).*

## Core Concepts

 - You already know HTML
 - JSON data automatically maps to CSS classes
 - Partials automatically map to CSS classes
 - Conditionals are boolean values, `true` or `false`
 - You cannot define any custom logic or maps with HTML
 - That's it.

## Examples

### Rendering basic data

```js
var html = require('html-lang');
console.log(html.render({ name: "Bob" }, tmpl));
```

```html
<p class="name">name placeholder</p>
```

**outputs:**

```html
<p class="name">Bob</p>
```

### Rendering an Object

```js
var html = require('html-lang');

var user = { user: { name: "Bob", email: "bob@bob.com" }};

console.log(html.render(user, tmpl));
```

```html
<div class="user">
  <p class="name">name placeholder</p>
  <p class="email">email placeholder</p>
</div>
```

**outputs:**

```html
<div>
  <p class="name">Bob</p>
  <p class="email">bob@bob.com</p>
</div>
```

### Rendering an Array of Objects ( collection )

```js
var html = require('html-lang');

var users = [ 
  { name: "Bob", email: "bob@bob.com"}, 
  { name: "Marak", email: "marak@marak.com"}
];

console.log(html.render(users, tmpl));
```


```html
<div class="users">
  <div class="user">
    <p class="name">name placeholder</p>
    <p class="email">email placeholder</p
  </div>
</div>
```

**outputs:**

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

**Set the context of where the render should occur based on an arbitrary CSS selector.**

```js
var html = require('html-lang');
console.log(html.render("#top-section", { name: "Bob" }, tmpl));
```

```html
<div id="top-section">
  <p class="name">name placeholder</p>
</div>
<div id="bottom-section">
  <p class="name">name placeholder</p>
</div>
```

**outputs:**

```html
<div id="top-section">
  <p>Bob</p>
</div>
```

### Conditionals

**Conditionally render blocks of HTML using Boolean values**

Setting a data value to `Boolean false` indicates the class will be removed during the render. 

That's it. Conditional logic propositions shouldn't exist in the View.  

**logged in as admin:**

```html
<div class="content">
  <div class="admin">
    <p>Hello Admin</p>
  </div>
  <div class="guest">
    <p>Hello Guest</p>
  </div>
</div>
```

```js
var html = require('html-lang');

var role = "admin";

if(role === "admin") {
  console.log(html.render( { guest: false }, tmpl));
} else {
  console.log(html.render( { admin: false }, tmpl));
}
```

**outputs:**

```html
<div class="content">
  <div class="admin">
    <p>Hello Admin</p>
  </div>
</div>
```

**logged in as guest:**

```js
var html = require('html-lang');

var role = "guest";

if(role === "admin") {
  console.log(html.render( { guest: false }, tmpl));
} else {
  console.log(html.render( { admin: false }, tmpl));
}
```

**outputs:**

```html
<div class="content">
  <div class="guest">
    <p>Hello Guest</p>
  </div>
</div>
```


### Nested layouts

```html
<p class="name">name placeholder</p>
<div class="creatures"></div>
```

```js
var html = require('html-lang');

var data = {
  
  sessionName: "Sam",
  
  welcome: "Hello there!",
  
  creatures: [ 
    { name: "Bob", email: "bob@bob.com"}, 
    { name: "Marak", email: "marak@marak.com"},
    { name: "Foo", email: "foo@bar.com"}
  ]
  
};



console.log(html.render(data, tmpl, tmpl));
```
**outputs:**

```html
<p class="name">Bob</p>
```

# That's it. I challenge you to find a use-case that isn't covered by HTML.