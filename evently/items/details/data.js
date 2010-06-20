function(doc) {
  var i, s, statesView = []; states = ["open","done","active","blocked","someday"];
  for (i=0; i < states.length; i++) {
    s = {state: states[i]};
    if (doc.state == states[i]) {
      s.selected = 'selected="selected"'
    }
    statesView.push(s);
  };
  doc.ownername = doc.profile.name;
  doc.states = statesView;
  doc.lmessage = $.linkify($.mustache.escape(doc.message));
  doc.gravatar_url = doc.profile.gravatar_url;
  doc.checked = doc.publish ? "checked" : "";
  doc.publish = !doc.publish && "noshare";
  doc.dbname = $$(this).app.db.name;
  doc.urlid = encodeURIComponent(doc._id);
  return doc;
};