var html = require('html-lang');

var tpl = '<p class="name"><a href="http://marak.com" class="link"></a></p>';
console.log(html.render({ 'link': "The big website", 'link.href': "http://big.vc" }, tpl));
