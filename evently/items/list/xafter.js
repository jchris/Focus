function() {
  var app = $$(this).app;
  $(".message", this).click(function() {
    if ($("input",this).length == 0) {
      var val = $(this).text();
      $(this).replace('<form><input type="text" value="'+val+'"</form>');
      $("input",this).focus();
      $("form",this).submit(function() {
        var form = $(this);
        var id = form.parents("li") .attr("data-id");
        var nval = $("input",this).val();
        app.db.openDoc(id, {
          success : function(doc) {
            doc.message = nval;
            app.db.saveDoc(doc, {
              success : function() {
                form.replace(nval);
              }
            })
          }
        });
        return false;
      });
    }
  })
};