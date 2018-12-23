$(document).ready(function() {
  $.getJSON("data.json", function(json) {
  console.log(json); // this will show the info it in firebug console
  

  var theTemplateScript = $("#footer-template").html();
  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);
  // Pass our data to the template
  var theCompiledHtml = theTemplate(json);
  // Add the compiled html to the page
  $('.footer-placeholder').html(theCompiledHtml);

  var theTemplateScript = $("#content-template").html();
  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);
  // Pass our data to the template
  var theCompiledHtml = theTemplate(json);
  // Add the compiled html to the page
  $('.content-placeholder').html(theCompiledHtml);
  good()
});

//helper method to "name": "3 - Tropical Sunset "
Handlebars.registerHelper('trimString', function(passedString) {
  var theString = passedString.substring(4,150);
  return new Handlebars.SafeString(theString)
});
Handlebars.registerHelper('link', function(object) {
  var url = Handlebars.escapeExpression(object.url),
      text = Handlebars.escapeExpression(object.text);

  return new Handlebars.SafeString(
    "<a href='" + url + "'>" + text + "</a>"
  );
});
  


function good() {
  console.log('ready');
  $('#thisb').html('these bags');
  
  $('#thisb').click(function(){
   
    
    var data = {"cid": "gzqvg"};
    console.log(data);
    $.ajax({
      url: 'https://www.beautylish.com/rest/interview-variant',
      type: 'POST',
      contentType:'application/json',
      data: JSON.stringify(data),
      dataType:'json',
      success: function(data){
        //On ajax success do this
        console.log(data + ' data');
         },
      error: function(xhr, ajaxOptions, thrownError) {
         //On error do this
           if (xhr.status == 200) {
   
               console.log('1 ' +ajaxOptions);
           }
           else {
               console.log('2 ' + xhr.status);
               console.log('3 ' +thrownError);
           }
       }
    });


    


  }); 

}
});



