function() {
  var link = $(this);
  var app = $$(this).app;
  var action = link.attr("href").replace("#",'');
  if (action == "details") {
    // go to details
  } else {
    // make a new state
    var id = link.parents("li").attr("data-id");
    app.db.openDoc(id, {
      success : function(doc) {
        doc.state = action;
        doc.state_at = new Date();
        doc.state_by = $("#account a[target=_new]").text();
        app.db.saveDoc(doc);
      }
    });
  }
  return false;
};