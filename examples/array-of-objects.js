var html = require('../lib/html');

var tpl = '<div class="users">\
            <div class="user">\
              <p class="name">name placeholder</p>\
              <p class="email">email placeholder</p\
            </div>\
          </div>';

var users = [ 
  { name: "Bob", email: "bob@bob.com"}, 
  { name: "Marak", email: "marak@marak.com"},
  { name: "Foo", email: "foo@bar.com"}
  
];

console.log(html.render({ users: users }, tpl));

