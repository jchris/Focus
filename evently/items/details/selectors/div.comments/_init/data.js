function(resp) {
  return {
    items : $.map(resp.rows, function(row) {
      return {
        comment : row.value.comment,
        user : row.value.profile.name
      }
    })
  }
};