var playlist = { key: "value" };
// keys will be artist names and keys will be song titles

function updatePlaylist(playlist, artist, song) {
  for (var artist in playlist) {
    playlist[artist] = "song";
    return playlist;
  }
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];

  playlist;
}

