$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var name = $("input#name").val();
    var address = $("input#address").val();
    var phone = $("input#phone").val();
    var email = $("input#email").val();

    $("ul").append("<li>" + name + "</li>");


    $(name).click(function() {
      $(address).show();

      $("#hidden").show();
      event.preventDefault();
    });

  });
});
