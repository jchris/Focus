function(data, e) {
  var p, params = e.data.args[1];
  var thisWeek = "06/21/2010"; // next monday
  return {
    // move this code to the view for better performance due to less data on disk.  
    items : $.map(data.rows, function(r) {
      var doc = r.value;
      p = doc.profile;
      p.rev = doc._rev;
      p.message = doc.message;
      p.state = doc.state || "open";
      p.id = r.id;
      p.publish = !doc.publish && "noshare";
      return p;
    })
  }
};