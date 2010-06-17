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
      doc._deleted = true;
      doc._rev = rev;
      doc.deleted_at = new Date();
      doc.deleted_by = $("#account a[target=_new]").text();
      app.db.saveDoc(doc, {
        success : function() {
          $(".saved", form).html('<span>Deleted: </span><a href="#/details/'+doc._id+'">'+doc.message+'</a> ');
          history.go(-1);
        },
        error : function() {
          $("#items").trigger('details',[{id:id}]);
        }
      });
    }
  });
  return false;
};