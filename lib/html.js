var html = exports,
    cheerio = require('cheerio');

//
// Enable XSS protection of strings by default
//
html.safeValues = true;

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

  var clone;

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
      if(typeof clone === "undefined") {
        clone = root.clone();
      }

      root.find(arrRoot).html('');

      obj.forEach(function(item, i){

        if(typeof item === 'object') {

          //
          // For every item that is an object
          //
          var copy = clone.clone();
          Object.keys(item).forEach(function(prop){

            //
            // For every property in that object
            //
            var attr, og;

            og = prop;

            if (prop.search('.') !== -1) {
              prop = prop.split('.');
              attr = prop[1];
              prop = prop[0];
            }

            if(copy.find(recordRoot + ' .' + prop).length > 0) {
              if (attr) {
                copy.find(recordRoot + ' .' + prop).attr(attr, stripXSS(item[og]));
              } else {
                copy.find(recordRoot + ' .' + prop).html(stripXSS(item[og]));
              }
            }

          });
          var r = root.find(arrRoot);
          r.append(copy.html());
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
          var attr, og;

          og = prop;

          if (prop.search('.') !== -1) {
            prop = prop.split('.');
            attr = prop[1];
            prop = prop[0];
          }

          if ($(selector + ' .' + prop).length > 0) {
            if (attr) {
              $(selector + ' .' + prop).attr(attr, stripXSS(obj[og]));
            } else {
              $(selector + ' .' + prop).html(stripXSS(obj[og]));
            }
          }

        }
      });
    }

  }
  iterate(data);
  return $.html();
};

var stripXSS = html.stripXSS = function (str) {

  // Prase string into server-side Level 1 DOM ( XML only )
  var dom = cheerio.load(str);

  // Remove any potentially harmful XML tags
  dom('script').remove();
  dom('meta').remove();

  // Turn the XML document back into a string of HTML
  return dom.html();

};
