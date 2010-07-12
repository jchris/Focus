function(e, p) {
  var ul = $(this), app = $$(ul).app;
  $.evently.followChanges(app);
  $("body").bind("evently-changes-"+app.db.name, function(e, resp) {
    $.each(resp.results, function() {
      $('li[data-user="'+this.doc.profile.name+'"].user ul', ul).trigger("_init");
    });
  });
};