'use strict';

function addToPlaylist(playlist, song, singer){
  playlist[singer]=song;
  return playlist;
}

function removeFromPlaylist(playlist, singer){
  delete playlist[singer];
  return playlist;
}

function changePlaylistSong(playlist, song, singer){
  playlist[singer]=song;
  return playlist;
}

function readPlaylist(playlist){
  if (Object.keys(playlist).length===0){
    console.log("your playlist is empty");
  } else {
    for(var singer in playlist) {
      console.log("The song "+playlist[singer] + " by "+singer+" is in your playlist");
    }
  }
}