function(data, e) {
  var p, params = e.data.args[1];
  return {
    // move this code to the view for better performance due to less data on disk.  
    gravatar_url : data.rows[0] && data.rows[0].value.profile.gravatar_url,
    team : true,
    items : $.map(data.rows, function(r) {
      var doc = r.value;
      p = doc.profile;
      p.rev = doc._rev;
      p.message = $.linkify($.mustache.escape(doc.message));
      p.state = doc.state || "open";
      p.id = r.id;
      p.publish = !doc.publish && "noshare";
      return p;
    })
  }
};