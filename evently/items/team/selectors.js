function() {
  var app = $$(this).app,
    list = app.ddoc.evently.items.list.selectors.ul._changes,
    idlist = {};
    
  return {
    "ul.done" : idlist,
    "ul.active" : idlist,
    "ul.blocked" : idlist
  };
};