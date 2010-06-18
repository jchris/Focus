function(e, params) {
  var me = $$("#account").userCtx.name, view = {
    user : params && params.user || "_all"    
  };
  if (me && me != params.user) {
    view.me = me;
  }
  return view;
};
