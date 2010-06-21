function(e, p) {
  $.log(p)
  return {
    "view" : "item-comments",
    endkey : [p._id],
    startkey : [p._id, {}],
    descending : true
  }
};