'use strict';

var myPlaylist={};



function addToPlaylist(playlist, song, artist){
  playlist[artist]=artist;
  playlist[song]=song;
  return playlist;
}

function changePlaylistSong(playlist, song, artist){

   playlist[artist]=song;
    
  return playlist;

}