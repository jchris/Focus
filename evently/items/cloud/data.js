function(resp, e, params) {
  return {
    cloud : $.map(resp.rows, function(r) {
      var word = r.key.pop();
      return {
        word : word,
        // todo use a new mustache delimiter for uri-encode
        user_uri : encodeURIComponent(params.user),
        word_uri : encodeURIComponent(word),
        size : (r.value * 4) + 10
      };
    })
  };
}
