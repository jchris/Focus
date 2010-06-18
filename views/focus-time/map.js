function(doc) {
  if (doc.publish && doc.created_at) {
    emit(doc.edit_at || doc.state_at || doc.created_at, doc);
  }
};