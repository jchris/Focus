function() {
  var form = $(this),
    f = form.serializeObject();
  $$(form).app.db.openDoc(f._id, {
    success : function(doc) {
      if (f.owner != doc.profile.name) {
        alert("setting new owner "+f.owner)
        // load the users doc from the users db
        // add the profile
        // save the new doc
      }
      doc.message = f.message;
      doc.state = f.state;
      doc._rev = f._rev;
      doc.edit_at = new Date();
      doc.edit_by = $$("#account").userCtx.name;
      $$(form).app.db.saveDoc(doc, {
        success : function(r) {
          $("#profile .saved").html('<span>Updated item: </span><a href="#/details/'+r.id+'">'+doc.message+'</a> ');
        }
      });
    }
  });
  return false;
}