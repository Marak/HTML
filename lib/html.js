var html = exports,
    cheerio = require('cheerio');

html.render = function (selector, data, tpl) {

  //
  // Simple curry
  //
  if(typeof tpl === "undefined") {
    tpl = data;
    data = selector;
    selector = '';
  }

  var $ = cheerio.load(tpl);

  function iterate (obj, key) {

    if(typeof obj !== "object") {
      return;
    }
    
    if (Array.isArray(obj)) {

      var arrRoot = selector + ' .' + key;

      //
      // TODO: use inflect library
      //
      var recordRoot = arrRoot.substr(0, arrRoot.length - 1);

      obj.forEach(function(item, i){
        Object.keys(item).forEach(function(prop){
          var x = $(recordRoot + ' .' + prop).html(item[prop]).clone();
          $(arrRoot).append(x);
        });
      });
      
    } else {
      Object.keys(obj).forEach(function(prop){
        if(typeof obj[prop] === "object") {
          iterate(obj[prop], prop);
        } else {
          $(selector + ' .' + prop).html(obj[prop])
        }
      });
    }
    
  }
  
  iterate(data);
  
  return $.html();
};