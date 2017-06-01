$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var name = $("input#name").val();
    var address = $("input#address").val();
    var phone = $("input#phone").val();
    var email = $("input#email").val();
    $("ul").append("<li class='liclass'>" + name + "<p class='hidden'>"+address+"</p></li><br><br>");
    event.preventDefault();
  });

  $( "body" ).on( "click", ".liclass" function() {
    alert( $( this ).text() );
  });

});
