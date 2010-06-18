function(doc) {
  if (doc.publish && doc.created_at && doc.state) {
    emit([doc.state, doc.state_at || doc.created_at], doc);
  }
};