/*
 source.js

 loads, compiles, and renders the listitem.hbs template with the shopping_list variable as its context

 */

var gallery_items =
    {
      description: 'to jest moj opis',
      items : [
        {
          name : 'apples',
          quantity : '3',
          done : true
        }
      ],
    };

$(document).ready(function(){

  // asynchronously load the template
  $.get('templates/gallery/gallery.hbs', function(source){
    // pass the template's source into the Handlebars compiler
    var template = Handlebars.compile(source);
    // pass the shopping list context in to render the template
    var html = template(gallery_items);
    // insert the HTML into the page
    $('#gallery').html(html);
  })

});