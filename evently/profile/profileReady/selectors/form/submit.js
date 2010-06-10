function() {
  var form = this;
  var doc = {
    created_at : new Date(),
    profile : $$("#profile").profile,
    message : $("[name=message]", form).val(),
    state : "open",
    type : "task"
  };
  $$(this).app.db.saveDoc(doc, {
    success : function() {
      $("[name=message]", form).val("");
    }
  });
  return false;
};
