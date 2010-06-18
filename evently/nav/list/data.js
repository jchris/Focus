function(e, params) {
  var me = $$("#account").userCtx.name, view = {
    user : (params && params.user) || "_all",
    focus : "Focus"
  };
  if (me && me != params.user) {
    view.me = me;
  }
  if (view.user != "_all") {
    view.focus = "Items";
  }
  return view;
};
