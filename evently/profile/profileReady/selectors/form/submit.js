function() {
  var form = this;
  var doc = {
    created_at : new Date(),
    profile : $$("#profile").profile,
    message : $("[name=message]", form).val(),
    state : "open",
    publish : true,
    type : "task"
  };
  $$(this).app.db.saveDoc(doc, {
    success : function(r) {
      $("[name=message]", form).val("");
      $(".saved", form).html('<a href="#/details/'+r.id+'">'+doc.message+'</a> ');
    }
  });
  return false;
};
