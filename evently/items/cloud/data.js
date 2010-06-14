function(resp) {
  return {
    cloud : resp.rows.map(function(r) {
      var word = r.key.pop();
      return {
        word : word,
        // todo use a new mustache delimiter for uri-encode
        word_uri : encodeURIComponent(word),
        size : (r.value * 4) + 10
      };
    })
  };
}
