console.log("this is a sanity check");

$(document).ready(function(){
  console.log("Let's get coding!")
  var $color = $("input")
  activeColor = $color.val()
  
//  $color.on("change", function() {
//    activeColor = $color.val();
//  }
  
  $("td").on("mouseover", function(event) {
    $(this).css("background-color", activeColor);
    });
})
