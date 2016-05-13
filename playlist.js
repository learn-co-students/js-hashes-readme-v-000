'use strict';

var playlist = {};

function addToPlaylist(playlist, song, artist) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}

function changePlaylistSong(playlist, song, artist ) {
  playlist[artist] = song;
  return playlist;
}

function readPlaylist(playlist) {
  if (playlistLength(playlist) == 0) {
    console.log('your playlist is empty');
  } else {
    Object.keys(playlist).forEach(function (artist) {
      console.log('The song ' + playlist[artist] + ' by ' + artist + ' is in your playlist');
    });
  }
}

function playlistLength(playlist) {
  return Object.keys(playlist).length;
}
