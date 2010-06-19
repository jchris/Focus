function(doc) {
  if (doc.publish)
  emit([doc.profile.name, doc.state, (doc.edit_at || doc.state_at || doc.created_at)], doc);
};