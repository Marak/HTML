var html = exports,
    cheerio = require('cheerio');

html.render = function (selector, data, tpl) {

  //
  // Simple arguments curry
  //
  if(typeof tpl === "undefined") {
    tpl = data;
    data = selector;
    selector = '';
  }

  //
  // TODO: replace with queryStringSelector
  //
  var $ = cheerio.load(tpl);

  function iterate (obj, key) {

    if(typeof obj !== "object") {
      return;
    }

    if (Array.isArray(obj)) {

      var arrRoot = selector + ' .' + key;

      //
      // TODO: use inflection library
      //
      var recordRoot = arrRoot.substr(0, arrRoot.length - 1);

      //
      // Clone a new copy of the element
      //
      var root  = $(arrRoot);

      //
      // For every item in the array
      //
      var clone = root.clone();
      root.find(arrRoot).html('');

      obj.forEach(function(item, i){

        if(typeof item === 'object') {

          //
          // For every item that is an object
          //
          Object.keys(item).forEach(function(prop){

            //
            // For every property in that object
            //
            if(clone.find(recordRoot + ' .' + prop).length > 0) {
              clone.find(recordRoot + ' .' + prop).html(item[prop]);
            }
          });

          var r = root.find(arrRoot);
          r.append(clone.html());
        }
      });

    } else {
      //
      // else, is not an array ( just a plain object )
      //
      Object.keys(obj).forEach(function(prop){
        if(typeof obj[prop] === "object") {
          //
          // If we find a nested object, interate on it
          //
          iterate(obj[prop], prop);
        } else {
          //
          // If we encounter a value, then act on it
          //
          if($(selector + ' .' + prop).length > 0) {
            $(selector + ' .' + prop).html(obj[prop]);
          }
        }
      });
    }

  }
  iterate(data);
  return $.html();
};