'use strict';

function addToPlaylist(myHash, song, singer){
  myHash[singer] =song;
  return myHash;
}

function removeFromPlaylist(playlist, singer) {
  delete playlist[singer];
  return playlist;
}

function changePlaylistSong(myHash, song, singer){
  myHash[singer] =song;
  return myHash;
}

function readPlaylist(playlist) {
  if (Object.keys(playlist).length == 0) {
    return console.log("your playlist is empty");
  } else {
    for (var key in playlist) {
      console.log("The song " + playlist[key] +" by "+ key +" is in your playlist");
    }
  }
}
