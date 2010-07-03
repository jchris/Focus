function(data) {
  var members = [],
    slib = $$(this).app.require("lib/states");
    owner = $(this).text();
  $.each(data.rows, function(row) {
    members.push(this.key[0]);
  });
  return {
    members : slib.selectSet(members, owner)
  }
};