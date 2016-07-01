"use strict"


var playlist = {
  drake: 'One Dance',
  beyounce: 'Formation',
  jcole: 'Crooked Smile'
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}
