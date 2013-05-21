var html = require('html-lang');

var tpl = '<div class="users">\
            <div class="user">\
              <p class="name">name placeholder</p>\
              <p class="email">email placeholder</p\
            </div>\
          </div>';

var users = [ 
  { name: "Foo", email: "foo@bar.com"},
  { name: "Bob", email: "bob@bob.com"}, 
  { name: "Marak", email: "marak@marak.com"}
];

console.log(html.render({ users: users }, tpl));
