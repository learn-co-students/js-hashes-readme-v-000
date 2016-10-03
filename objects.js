var playlist = { someone: 'something' }

function updatePlaylist(playlist, name, song) {
  playlist[name] = song

  return playlist
}

function removeFromPlaylist(playlist, name) {
  delete playlist[name]

  return playlist
}