function(e) {
  // $.log(e.data.args[2].id)
  var form = $(this),
    app = $$(form).app,
    f = form.serializeObject(),
    d = form.parents(".details"),
    id = d.attr("data-id"),
    rev = d.attr("data-rev");

  app.db.openDoc(id, {
    success : function(doc) {
      if ($("[name=publish]:checked", form).length > 0) {
        doc.publish = true;
      } else {
        doc.publish = false;
      }
      doc._rev = rev; // mvcc!
      doc.message = f.message;
      doc.state = f.state;
      doc.state_at = new Date();
      doc.state_by = $("#account a[target=_new]").text();
      app.db.saveDoc(doc, {
        success : function() {
          form.trigger('details',[{id:id}]);
        }
      });
    }
  });
  return false;
};