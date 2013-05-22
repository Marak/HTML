var html = require('../'),
    test = require('tap').test;

test('partial', function (t) {
  var tpl = '<div id="top-section">\
    <p class="name">name placeholder</p>\
      </div>\
    <div id="bottom-section">\
      <p class="name">name placeholder</p>\
    </div>';

  var out = '<div id="top-section">\
    <p class="name">Bob</p>\
      </div>\
    <div id="bottom-section">\
      <p class="name">name placeholder</p>\
    </div>';

  t.equal(html.render("#top-section", { name: "Bob" }, tpl), out);
  t.end();
});
