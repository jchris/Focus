function() {
  var select = $(this), 
    state = select.val(), 
    li = select.parents("li"), 
    rev = li.attr("data-rev"),
    id = li.attr("data-id");
  $$(select).app.db.openDoc(id, {
    success : function(doc) {
      doc.state = state;
      doc._rev = rev;
      doc.edit_at = new Date();
      doc.edit_by = $$("#account").userCtx.name;
      $$(select).app.db.saveDoc(doc, {
        success : function(r) {
          $("#profile .saved").html('<span/>').text("Updated: "+doc.message);
        }
      });
    }
  });
  
};