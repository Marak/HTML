var html = require('../'),
    test = require('tap').test;

test('basic', function (t) {
  var tpl = '<p class="name">name placeholder</p>';
  t.equal(
    html.render({ name: "Bob" }, tpl),
    '<p class="name">Bob</p>'
  );
  t.end();
});
