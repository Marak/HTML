var html = require('html-lang');

var tpl = '<p class="name"><a href="http://google.com" class="link"></a></p>';
console.log(html.render({ 
  'link': "The yahoo website",
  'link.href': "http://yahoo.com" 
}, tpl));
