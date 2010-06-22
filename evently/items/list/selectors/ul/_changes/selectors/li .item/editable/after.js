function(doc) {
  // set textinput size
  var item = $(this), 
    message = $("[name=message]", this), 
    right = $("select", this).position().left, 
    left = message.position().left;
  message.width(right - left - 12);
};