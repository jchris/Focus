function() {
  var widget = $(this), app = $$(widget).app;
  $.evently.followChanges(app);
  $("body").bind("evently-changes-"+app.db.name, function(e, resp) {
    $('ul', widget).trigger("_init");
  });
};
