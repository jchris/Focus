function(e) {
  var resp = e.data.args[0];
  var doc, docid = $(this).parents("li").attr("data-id");
  for (var i=0; i < resp.rows.length; i++) {
    if (resp.rows[i].id == docid) {
      doc = resp.rows[i].value;
      break;
    }
  };
  var states = ["open", "active", "done", "blocked", "someday"];
  return {
    _rev : doc._rev,
    _id : doc._id,
    message : doc.message,
    states : $.map(states, function(state) {
      return {
        state : state,
        selected : state == doc.state && "selected"
      }
    })
  };
};