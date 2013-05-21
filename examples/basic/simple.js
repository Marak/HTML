var html = require('html-lang');

var tpl = '<p class="name">name placeholder</p>';

console.log(html.render({ name: "Bob" }, tpl));
