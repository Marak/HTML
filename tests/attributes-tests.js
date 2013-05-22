var html = require('../'),
    test = require('tap').test;

test('attributes', function (t) {
  var tpl = '<p class="name"><a href="http://marak.com" class="link"></a></p>';
  t.equal(
    html.render({ 'link': "The big website", 'link.href': "http://big.vc" }, tpl),
    '<p class="name"><a href="http://big.vc" class="link">The big website</a></p>'
  );
  t.end();
});
