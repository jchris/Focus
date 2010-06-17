function(doc) {
  var i, s, statesView = []; states = ["open","done","active","blocked","someday"];
  for (i=0; i < states.length; i++) {
    s = {state: states[i]};
    if (doc.state == states[i]) {
      s.selected = 'selected="selected"'
    }
    statesView.push(s);
  };
  doc.states = statesView;
  $.log(doc.publish)
  doc.checked = doc.publish ? "checked" : "";
  return doc;
};