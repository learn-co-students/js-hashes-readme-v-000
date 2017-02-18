var playlist = {fallOutBoy: "Immortals"};


// Playlist is an object, artist is a string, song is a string
function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

// Playlist is an object, artist is a string
function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}