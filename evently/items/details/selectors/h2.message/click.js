function() {
  // todo this edit in place stuff should go in a commonjs module
  var $me = $(this), app = $$($me).app, 
    id = $me.parents("div").attr("data-id");

  if ($("input",$me).length == 0) {
    var m = $(".message",$me);
    var val = $(m).text();
    $(m).replace('<form><input type="text" value="'+val+'"><input type="submit" value="Save"></form>');
    $("input",$me).focus();
    $("form",$me).submit(function() {
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
  //  
};
};
