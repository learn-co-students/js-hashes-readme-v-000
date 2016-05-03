'use strict';

var myPlaylist = {};

function addToPlaylist(playlist, song, artist) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}

function changePlaylistSong(playlist, artist, song) {
  playlist[song] = artist;
  return playlist;
}

function readPlaylist(playlist) {
  if(Object.keys(playlist).length) {
    for(var key in playlist) {
      console.log("The song " + playlist[key] + " by " + key + " is in your playlist");
    }
  } else {
    console.log("your playlist is empty");
  }
}
