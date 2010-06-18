function(doc) {
  if (doc.state != "remove")
  emit([doc.profile.name, doc.state_at || doc.created_at], doc);
};
