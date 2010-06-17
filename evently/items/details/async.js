function(cb, e, params) {
  // generic async to load a doc by id
  var det = $(this);
  $$(det).app.db.openDoc(params.id, {success : cb,
    error: function() {
      $(det).html("<h2>Error loading doc. "+params.id+"</h2>")
    }});
};