function(data, e) {
  var p, params = e.data.args[1];
  return {
    // move this code to the view for better performance due to less data on disk.  
    items : $.map(data.rows, function(r) {
      p = r.value.profile;
      p.rev = r.value._rev;
      p.message = r.value.message;
      p.state = r.value.state || "open";
      p.id = r.id;
      p.friday = params.friday;
      return p;
    })
  }
};