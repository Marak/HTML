var html = require('html-lang');

var tpl = '<div class="user">\
            <p class="name">name placeholder</p>\
            <p class="email">email placeholder</p>\
            <div class="meta"><span class="foo"></span><span class="bar"></span></div>\
          </div>';

var user = { user: { name: "Bob", email: "bob@bob.com", meta: { foo: 'val1', bar: 'val2'}}};

console.log(html.render(user, tpl));
