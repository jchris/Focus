function(e) {
  // /items/:user/[:state]
  // /items/jchris/open
  // TODO /items/_all/done
  // /items/amysue
  var params = e.data.args[1];
  if (params.user) {
    if (params.state) {
      return {
        "view" : "user-state-created",
        "descending" : true,
        "endkey" : [params.user, params.state],
        "startkey" : [params.user, params.state, {}]
      };
    } else {
      return {
        "view" : "user-created",
        "descending" : true,
        "endkey" : [params.user],
        "startkey" : [params.user, {}]
      };
    }
  } else {
    return {
      "view" : "created",
      "descending" : true,
      "limit" : 50
    };
  }
};
