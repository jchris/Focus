function() {
  $.log("list query.js")
  // /items/user/state
  // /items/jchris/open
  // /items/_all/done
  // /items/amysue
  var params = arguments[0].data.args[1];
  $.log(params);
  function stateView(state) {
    var name = $("#account a[target=_new]").text();
    return {
      "view" : "user-state-created",
      "startkey" : [name, state],
      "endkey" : [name, state,{}]
    };
  };

  return {
    "view" : "recent-items",
    "descending" : "true",
    "limit" : 50
  };
};

