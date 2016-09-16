var playlist = {"sia": "clap your hands"};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}


function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}
