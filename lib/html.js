var html = exports,
    cheerio = require('cheerio');

html.render = function (selector, data, tpl) {
  
  //
  // Simple curry
  //
  if(typeof tpl === "undefined") {
    tpl = data;
    data = selector;
  }

  var $ = cheerio.load(tpl);
  
  function iterate (obj, position) {

    position = position || -1;

    if(typeof obj !== "object") {
      return;
    }
    
    if (Array.isArray(obj)) {
      
      // First, find array root as CSS
      var arrRoot = $('.users');
      
      // Second, find record root in array root as CSS
      var recordRoot = $('.users .user');
      
//      var tpl = recordRoot;
//      tpl('.name').html('fuck')
//      console.log('s',tpl.html())
      
      obj.forEach(function(item, i){
        
        Object.keys(item).forEach(function(prop){
          var x = $('.user ' + '.' + prop).html(item[prop]).clone();
          $('.users').append(x);
        });

      });
      
    } else {
      
      
    Object.keys(obj).forEach(function(prop){

      if(typeof obj[prop] === "object") {
        iterate(obj[prop], position);
      }

      else if (Array.isArray(obj)) {
        iterate(object, position);
      }

      else if(position === -1) {
        $('.' + prop).html(obj[prop]);
      }

    });
    }
    
    
  }
  
  iterate(data);
  
  
  return $.html();
};