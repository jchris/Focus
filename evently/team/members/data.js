function(data) {
  var view = {members:[]};
  $.each(data.rows, function(row) {
    view.members.push({name:this.key[0]});
  });
  return view;
};