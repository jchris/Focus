function() {
  if ($("input",this).length == 0) {
    $(this).trigger("editable")
  }
};