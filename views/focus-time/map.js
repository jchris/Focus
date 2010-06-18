function(doc) {
  if (doc.publish && doc.created_at) {
    emit(doc.created_at, doc);
  }
};