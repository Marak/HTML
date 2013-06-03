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
<div class="user">
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
    <p class="email">email placeholder</p>
  </div>
</div>
```

**outputs:**

```html
<div class="users">
  <div class="user">
    <p>Bob</p>
    <p>bob@bob.com</p>
  </div>
  <div class="user">
    <p>Marak</p>
    <p>marak@marak.com</p>
  </div>
</div>
```

### XML Node Attributes

```html
<p class="name"><a href="" class="link"></a></p>
```

```js
var html = require('html-lang');

var data = { 
  'link': "The big website", 
  'link.href': "http://big.vc" 
};

console.log(html.render(data, tmpl));
```
**outputs:**

```html
<p class="name"><a href="http://big.vc" class="link">The big website</a></p>
```

# That's it. I challenge you to find a use-case that isn't covered by HTML.