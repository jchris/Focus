function() {
  var foo = $(this), app = $$(foo).app, members = foo.parents("li .item").find(".members");
  members.evently("team", app);
  members.trigger("members", [foo]);
}