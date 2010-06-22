function(doc) {
  var slib = $$(this).app.require("lib/states");
  
  doc.ownername = doc.profile.name;
  doc.states = slib.selectStates(doc.state);
  doc.lmessage = $.linkify($.mustache.escape(doc.message));
  doc.gravatar_url = doc.profile.gravatar_url;
  doc.bchecked = (doc.blocked || doc.state=="blocked") ? "checked" : "";
  doc.pchecked = doc.publish ? "checked" : "";
  doc.publish = !doc.publish && "noshare";
  doc.dbname = $$(this).app.db.name;
  doc.urlid = encodeURIComponent(doc._id);
  return doc;
};