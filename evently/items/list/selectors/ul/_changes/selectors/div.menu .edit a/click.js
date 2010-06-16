function() {
  var link = $(this);
  var li = link.parents("li"), id = li.attr("data-id");
  var app = $$(this).app;
  var action = link.attr("href").replace("#",'');
  if (action == "edit") {
    // make the message into a text box again
    if ($("input",li).length == 0) {
      var m = $(".message",li);
      var val = $(m).text();
      $(m).replace('<form><input type="text" value="'+val+'"><input type="submit" value="Save"></form>');
      $("input",li).focus();
      setTimeout(function() {
        $("form",li).submit(function() {
          var form = $(this);
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
      }, 5000);
    }

  } else {


  }
  return false;
};