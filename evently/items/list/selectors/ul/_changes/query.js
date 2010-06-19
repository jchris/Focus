function(e) {
  // /items/:user/[:state]
  // /items/jchris/open
  // /items/_all/done
  // /items/amysue
  var params = e.data.args[1];
  if (params.tag) {
    return {
      view : "tags",
      endkey : [params.tag],
      startkey: [params.tag, {}],
      descending : true,
      reduce : false
    };
  } else if (params.mention) {
    return {
      view : "mentions",
      endkey : [params.mention],
      startkey: [params.mention, {}],
      descending : true,
      reduce : false
    };
  } else {
    if (params.user) {
      if (params.state) {
        if (params.user != "_all") {
          if (params.focus) {
            return {
              "view" : "focus-user-state-created",
              "descending" : true,
              "endkey" : [params.user, params.state],
              "startkey" : [params.user, params.state, {}]
            };            
          } else {
            return {
              "view" : "user-state-created",
              "descending" : true,
              "endkey" : [params.user, params.state],
              "startkey" : [params.user, params.state, {}]
            };            
          }
        } else {
          return {
            "view" : "focus-state",
            "descending" : true,
            "endkey" : [params.state],
            "startkey" : [params.state, {}]
          };
        }
      } else {
        if (params.user != "_all") {
          return {
            "view" : "user-created",
            "reduce" : false,
            "descending" : true,
            "endkey" : [params.user],
            "startkey" : [params.user, {}]
          };
        } else {
          return {
            "view" : "focus-time",
            "descending" : true,
            "limit" : 25
          };
        }
      }
    } else {
      return {
        "view" : "focus-time",
        "descending" : true,
        "limit" : 25
      };
    }
  }
};
