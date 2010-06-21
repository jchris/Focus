function(data, e) {
  var p, params = e.data.args[1], name;
  
  var states = ["open","active","done","blocked","someday"];
  
  function selectStates(state) {
    return $.map(states, function(s) {
      return {
        state : s,
        selected : s == state && "selected"
      }
    })
  };
  
  function newName(n) {
    if (n == name) {
      return false;
    } else {
      name = n;
      return true;
    }
  }
  
  return {
    // move this code to the view for better performance due to less data on disk.  
    gravatar_url : data.rows[0] && data.rows[0].value.profile.gravatar_url,
    items : $.map(data.rows, function(r) {
      var doc = r.value, n = newName(doc.profile.name);
      p = doc.profile;
      p.rev = doc._rev;
      p.message = $.linkify($.mustache.escape(doc.message));
      p.state = doc.state || "open";
      p.states = selectStates(p.state);
      p.id = r.id;
      p.rev = doc._rev;
      p.pic = n;
      p.npic = !n;
      p.publish = !doc.publish && "noshare";
      return p;
    })
  }
};