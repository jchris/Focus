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

exports.selectSet = function(set, x) {
  if (x && set.indexOf(x) == -1) {
    set.push(x);
  }
  return $.map(set, function(s) {
    return {
      name : s,
      selected : s == x && "selected"
    }
  })
}