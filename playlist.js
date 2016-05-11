'use strict';

var myPlaylist = {};

function addToPlaylist(playlist, song, artist){
  playlist[artist] = song;
  return playlist;
};

function removeFromPlaylist(playlist, artist){
  delete playlist[artist];
  return playlist;
}

function changePlaylistSong(playlist, song, artist){
  playlist[artist] = song;
  return playlist;
}

function readPlaylist(playlist){
  if (Object.keys(playlist).length > 0){
      for (var i in playlist){
        console.log("The song " + playlist[i] + " by " + i + " is in your playlist");
      }
    }
  else{
    console.log("your playlist is empty");
  }
    
}