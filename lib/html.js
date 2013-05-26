var html = exports,
    cheerio = require('cheerio');

//
// Enable XSS protection of strings by default
//
html.safeValues = true;

html.render = function (data, tpl) {

  //
  // Create the current rendering context by loading the tpl
  //
  var $ = cheerio.load(tpl);

  if(typeof data !== "object") {
    return $.html();
  }

  if (Array.isArray(data)) {

    //
    // Create a clone of the template we are going to use
    //
    var clone = $.html(),
        result = '';

    //
    // For every item in the array, append a filled out clone
    //
    data.forEach(function(item){
      result += html.render(item, clone)
    });

    return result;

  } else {
    Object.keys(data).forEach(function (prop) {
      var attr, og, value;

      og = prop;

      //
      // Determine if a period was found in property name, 
      // if so this indicates the value should be assigned to an XML node attribute
      //
      if (prop.search('.') !== -1) {
        prop = prop.split('.');
        attr = prop[1];
        prop = prop[0];
      }

      //
      // For every property in the data object
      //
      if(typeof data[prop] === 'object') {
        value = html.render(data[prop], $('.' + prop).html())
      } else {
        value = stripXSS(data[og])
      }

      //
      // If the property value is an object, iterate again
      //
      if ($('.' + prop).length > 0) {
        if (attr) {
          $('.' + prop).attr(attr, value);
        } else {
          $('.' + prop).html(value);
        }
      }
    });
  }

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
