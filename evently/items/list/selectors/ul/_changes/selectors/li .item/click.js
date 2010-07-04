function() {
  if ($("input",this).length == 0 && $("select", this).length != 0) {
    $(this).trigger("editable");
  }
};