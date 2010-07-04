function(e, params) {
  var loggedInUser = $$("#account").userCtx, 
    view = {
      user : (params && params.user) || "_all",
      focus : "Focus"
  };
  if (loggedInUser) {
    view.me = loggedInUser.name;
  }
  if (view.user != "_all") {
    view.focus = "Items";
  }
  return view;
};
