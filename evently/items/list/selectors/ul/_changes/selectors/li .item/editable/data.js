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
  var v =  {
    _rev : doc._rev,
    _id : doc._id,
    message : doc.message.replace(/[&"<>\\]/g, function(s) {
      switch(s) {
        case "&": return "&amp;";
        case "\\": return "\\\\";;
        case '"': return '&quot;';;
        case "<": return "&lt;";
        case ">": return "&gt;";
        default: return s;
      }
    }),
    states : slib.selectStates(doc.state),
    gravatar_url : doc.profile.gravatar_url,
    name : doc.profile.name
  };
  v.bchecked = doc.blocked ? "checked" : "";
  v.pchecked = doc.publish ? "checked" : "";
  return v;
};