function() {
  // set app to connect to changes with include docs (or support upgrade...)
  // filter js is a function to say whether or not you care about an update...
  // maybe there is a way to have it interact with startkey - endkey and the view definition?
  // autofilter for query json
  
  var ul = $(this), app = $$(ul).app;
  $.evently.followChanges(app);
  $("body").bind("evently.changes."+app.db.name, function(e, resp) {
    $.each(resp.results, function() {
      $('li[data-id="'+this.doc.profile.name+'"].user ul', ul).trigger("_init");
    });
  });
  // connect to changes
  // parse the ids
  // trigger dom elements that match them
};