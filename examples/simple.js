var html = require('../lib/html');

var tpl = '<p class="name">name placeholder</p>';

console.log(html.render({ name: "Bob" }, tpl));
