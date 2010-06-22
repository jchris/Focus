exports.selectStates = function(state) {
  var states = ["now","later","done"];
  if (state && states.indexOf(state) == -1) {
    states.push(state);
  }
  return $.map(states, function(s) {
    return {
      state : s,
      selected : s == state && "selected"
    }
  })
};
