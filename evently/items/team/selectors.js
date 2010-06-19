function() {
  var app = $$(this).app,
    list = app.ddoc.evently.items.list.selectors.ul._changes;
    eval("var query = "+list.query+";");
    var widget = {
      _init : {
        mustache : list.mustache,
        data : list.data,
        query : function() {
          var ul = $(this);
          var li = ul.parents("li.user");
          return query({
            data : {
              args : [0,{
                user : li.attr("data-user"),
                state : ul.attr("class").replace(/s/,''),
                focus : true
              }]
            }
          });
        }
      }
    };
    
  return {
    "ul.sdone" : widget,
    "ul.sactive" : widget,
    "ul.sblocked" : widget
  };
};