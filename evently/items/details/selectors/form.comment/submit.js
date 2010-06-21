function(e) {
  e.preventDefault();
  var form = $(this),
    app = $$(form).app,
    f = form.serializeObject();
  f.created_at = new Date();
  f.profile = $$("#profile").profile;
  app.db.saveDoc(f, {
    success : function() {
      $("textarea", form).val("");
    }
  });
  return false;
}
