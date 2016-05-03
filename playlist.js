'use strict';

var myPlayList = {};

function addToPlaylist(playList, song, artist){
  playList[artist] = song;
  return playList;
}

function removeFromPlaylist(playList, artist){
  delete playList[artist];
  return playList;
}

function changePlaylistSong(playList, newSong, artist){
  playList[artist] = newSong;
  return playList;
}

function readPlaylist(playList){
  if (Object.keys(playList).length == 0){
    console.log("your playlist is empty")
  }
  else {
    for(var key in playList){
      console.log("The song " + playList[key] + ' by ' + key + ' is in your playlist');
    }
  }
}