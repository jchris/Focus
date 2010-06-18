function(doc) {
  if (doc.message && doc.created_at) {
    var words = {};
    doc.message.replace(/\#([\S\-\.]*[\w]+[\S\-\.]*)/g, function(tag, word) {
      words[word.toLowerCase()] = true;
    });
    for (var w in words) {
      emit([w, doc.created_at], doc);
    }
  }
}
