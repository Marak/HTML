var html = require('../../lib/html');

var fs = require('fs');

var tmpl = fs.readFileSync('./examples/complex/index.html').toString();

var data = {
  
  sessionName: "Sam",
  
  welcome: "Hello there!",
  
  users: [ 
    { name: "Bob", email: "bob@bob.com"}, 
    { name: "Marak", email: "marak@marak.com", 'name.href': "http://marak.com"},
    { name: "Foo", email: "foo@bar.com"}
  ]

};


console.log(html.render(data, tmpl));

