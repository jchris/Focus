function() {
  // todo get the state from the dom
  var state = "active",
    name = $("#account a[target=_new]").text()
  return {
    "view" : "user-state-created",
    "startkey" : [name, "active"],
    "endkey" : [name, "active",{}]
  };
}