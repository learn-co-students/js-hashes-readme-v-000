var playlist = {
  "red cabin" : "right this way",
  "snowday"   : "trireme",
  "jonathan"  : "best of me"
};

function updatePlaylist (playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}
