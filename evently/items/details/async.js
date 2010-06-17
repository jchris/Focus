function(cb, e, params) {
  // generic async to load a doc by id
  $$(this).app.db.openDoc(params.id, {success : cb});
};