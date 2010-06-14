function(doc) {
  emit([doc.profile.name, doc.created_at], doc);
};
