var html = require('../'),
    test = require('tap').test;

test('objects', function (t) {
  var tpl = '<div class="user">\
              <p class="name">name placeholder</p>\
              <p class="email">email placeholder</p>\
              <div class="meta"><span class="foo"></span><span class="bar"></span></div>\
            </div>';

  var out = '<div class="user">\
              <p class="name">Bob</p>\
              <p class="email">bob@bob.com</p>\
              <div class="meta"><span class="foo">val1</span><span class="bar">val2</span></div>\
            </div>';

  var user = { user: { name: "Bob", email: "bob@bob.com", meta: { foo: 'val1', bar: 'val2'}}};

  t.equal(html.render(user, tpl), out);
  t.end();
});
