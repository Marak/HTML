var html = require('../lib/html');

var tpl = '<div id="top-section">\
  <p class="name">name placeholder</p>\
    </div>\
    <div id="bottom-section">\
      <p class="name">name placeholder</p>\
    </div>';
    
console.log(html.render("#top-section", { name: "Bob" }, tpl));
