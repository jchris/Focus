function(doc) {
  if (doc.comment) {
    emit([doc.item_id, doc.created_at], doc);
  }
}