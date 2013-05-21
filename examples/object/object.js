var html = require('html-lang');

var tpl = '<div class="user">\
            <p class="name">name placeholder</p>\
            <p class="email">email placeholder</p>\
          </div>';

var user = { user: { name: "Bob", email: "bob@bob.com"}};

console.log(html.render(user, tpl));
