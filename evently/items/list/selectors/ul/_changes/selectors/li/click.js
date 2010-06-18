function(e) {
  if (e.target.nodeName == "A") {return true;}
  $.pathbinder.go("/details/"+encodeURIComponent($(this).attr("data-id")));
};