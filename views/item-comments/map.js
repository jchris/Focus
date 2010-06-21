function() {
  if (doc.comment) {
    emit(doc.created_at, doc);
  }
}