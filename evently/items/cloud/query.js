function(e, params) {
  if (params.user) {
    return {
      "view" : "user-tagcloud",
      "startkey" : [params.user],
      "endkey" : [params.user, {}],
      "group_level" : 2
    }    
  } else {
    return {
      "view" : "tagcloud",
      "group_level" : 1
    }
  }
};

