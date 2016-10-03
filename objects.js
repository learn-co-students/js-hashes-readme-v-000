var playlist = {beyonce: "Crazy in Love", jayZ: "99 Problems", kanye: "Heartless"}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist
}