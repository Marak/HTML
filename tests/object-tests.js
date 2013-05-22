var html = require('../'),
    test = require('tap').test;

test('objects', function (t) {
  var tpl = '<div class="user">\
              <p class="name">name placeholder</p>\
              <p class="email">email placeholder</p>\
            </div>';

  var out = '<div class="user">\
              <p class="name">Bob</p>\
              <p class="email">bob@bob.com</p>\
            </div>';

  var user = { user: { name: "Bob", email: "bob@bob.com"}};

  t.equal(html.render(user, tpl), out);
  t.end();
});
