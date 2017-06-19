
'use strict';

var playlist = {"taylor swift": "out of the woods"}

function addToPlaylist(playlist, song, artist){
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist){
  delete playlist[artist];
  return playlist;
}


function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}
