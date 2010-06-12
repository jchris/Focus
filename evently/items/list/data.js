function(data) {
  $.log(data)
  var p;
  return {
    // move this code to the view for better performance due to less data on disk.  
    items : data.rows.map(function(r) {
      p = r.value.profile;
      p.rev = r.value._rev;
      p.message = r.value.message;
      p.state = r.value.state || "open";
      p.id = r.id;
      return p;
    })
  }
};