
'use strict';


var playlist = {"cash": "walk the line", "hank": "cheatin' heart"};

function updatePlaylist(playlist, artist, song) {

  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {

  delete playlist[artist];
  return playlist;
}