var fs = require('fs'),
    path = require('path'),
    html = require('../'),
    test = require('tap').test;

var fixturesPath = path.join(__dirname, 'fixtures', 'complex'),
    tmpl = fs.readFileSync(path.join(fixturesPath, 'in.html'), 'utf8'),
    out = fs.readFileSync(path.join(fixturesPath, 'out.html'), 'utf8');

test('complex', function (t) {
  var data = {
    sessionName: "Sam",
    welcome: "Hello there!",
    users: [
      { name: "Bob", email: "bob@bob.com"}, 
      { name: "Marak", email: "marak@marak.com", 'name.href': "http://marak.com"},
      { name: "Foo", email: "foo@bar.com"}
    ]
  };

  t.equal(
    html.render(data, tmpl),
    out
  );
  t.end();
});
