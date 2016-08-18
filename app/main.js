/*
 source.js

 loads, compiles, and renders the listitem.hbs template with the shopping_list variable as its context

 */

var shopping_list =
    {
      items : [
        {
          name : 'apples',
          quantity : '3',
          done : true
        },
        {
          name : 'oranges',
          quantity : '4',
          done : true
        },
        {
          name : 'hamburger',
          quantity : '2 pounds',
          done : false
        },
        {
          name : 'cheese',
          quantity : '1 package',
          done : false
        }
      ]
    };

$(document).ready(function(){

  // asynchronously load the template
  $.get('templates/listitem.hbs', function(source){
    // pass the template's source into the Handlebars compiler
    var template = Handlebars.compile(source);
    // pass the shopping list context in to render the template
    var html = template(shopping_list);
    // insert the HTML into the page
    $('#container').html(html);
  })

});


