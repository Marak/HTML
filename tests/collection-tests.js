var html = require('../'),
    test = require('tap').test;

test('collections', function (t) {
  var tpl = ['<div class="users">',
             '<div class="user">',
               '<p class="name">name placeholder</p>',
               '<p class="email">email placeholder</p>',
               '<div class="meta"><span class="prop"></span></div>',
             '</div>',
           '</div>'].join('');

  var out = ['<div class="users">',
             '<div class="user">',
               '<p class="name">Foo</p>',
               '<p class="email">foo@bar.com</p>',
               '<div class="meta"><span class="prop"></span></div>',
             '</div>',
             '<div class="user">',
               '<p class="name">Bob</p>',
               '<p class="email">bob@bob.com</p>',
               '<div class="meta"><span class="prop"></span></div>',
             '</div>',
             '<div class="user">',
               '<p class="name">Marak</p>',
               '<p class="email">marak@marak.com</p>',
               '<div class="meta"><span class="prop">test</span></div>',
             '</div>',
           '</div>'].join('');


  var users = [ 
    { name: "Foo", email: "foo@bar.com"},
    { name: "Bob", email: "bob@bob.com"}, 
    { name: "Marak", email: "marak@marak.com", meta: { prop: 'test' }}
  ];

  //console.log(html.render({ users: users }, tpl));
  t.equal(html.render({ users: users }, tpl), out);
  t.end();
});
