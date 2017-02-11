var playlist = {artist: "title"};

//function accepting object, key, and value
//allows to establish song as value in key/value pair and return object

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist;
}