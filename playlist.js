'use strict';
function addToPlaylist(playlist, song, singer){
  playlist[singer] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist){
  delete playlist[singer];
  return playlist;
}

function changePlaylistSong(playlist, new_song, artist_name){
  playlist[artist_name] = song;
  return playlist;
}

function readPlaylist(playlist){
  if (Object.keys(playlist).length == 0 ){
    return console.log("your playlist is empty");

  }else {
    for (var key in playlist){
      console.log("The song " + playlist[key] +" by "+ key +" is in your playlist");
    }
  }
}