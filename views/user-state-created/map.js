function(doc) {
  emit([doc.profile.name, doc.state, doc.created_at], doc);
};