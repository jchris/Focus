function(e) {
  var resp = e.data.args[0];
  var doc, docid = $(this).parents("li").attr("data-id");
  for (var i=0; i < resp.rows.length; i++) {
    if (resp.rows[i].id == docid) {
      doc = resp.rows[i].value;
      break;
    }
  };
  var slib = $$(this).app.require("lib/states");
  return {
    _rev : doc._rev,
    _id : doc._id,
    message : doc.message,
    states : slib.selectStates(doc.state)
  };
};