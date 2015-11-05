//= require_tree .


$(document).ready(function() {

  $(".reveal-code").click(function() {
    var code = $(this).parent().find(".code")

    code.toggle();
    return false;
  })
})
