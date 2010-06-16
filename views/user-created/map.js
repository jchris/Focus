function(doc) {
  if (doc.state != "remove")
  emit([doc.profile.name, doc.created_at], doc);
};
