function(doc) {
  emit([doc.profile.name, doc.state, doc.state_at || doc.created_at], doc);
};