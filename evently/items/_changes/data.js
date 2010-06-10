function(data) {
  $.log(data)
  var p;
  return {
    items : data.rows.map(function(r) {
      p = r.value.profile;
      p.message = r.value.message;
      p.state = r.value.state || "open";
      p.id = r.id;
      return p;
    })
  }
};