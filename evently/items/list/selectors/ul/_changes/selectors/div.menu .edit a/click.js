function(e) {
  var link = $(this);
  var li = link.parents("li"), id = li.attr("data-id");
  var app = $$(this).app;
  var params = e.data.args[1];
  var action = link.attr("href").replace("#",'');
  var user = $$("#account").userCtx.name;
  var thisWeek = "06/21/2010"; // next monday
  switch (action) {
    case "edit" :
      // make the message into a text box again
      if ($("input",li).length == 0) {
        var m = $(".message",li);
        var val = $(m).text();
        $(m).replace('<form><input type="text" value="'+val+'"><input type="submit" value="Save"></form>');
        $("input",li).focus();
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
      }
    case "share" :
      app.db.openDoc(id, {
        success : function(doc) {
          doc.shared = doc.shared || {};
          doc.shared[user] = doc.shared[user] || {};
          doc.shared[user][thisWeek] = true;
          app.db.saveDoc(doc, {
            success : function() {
              // todo trigger a UI success indicator
            }
          });
        }
      });
  }
  return false;
};