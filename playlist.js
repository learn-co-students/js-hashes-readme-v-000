'use strict';

var myPlaylist = {};

function addToPlaylist (myPlaylist, song, artist){
  myPlaylist[artist] = song;
  return myPlaylist;
}

function removeFromPlaylist (myPlaylist, artist){
  delete myPlaylist[artist];
  return myPlaylist;
}

function changePlaylistSong (myPlaylist, artist, song){
  myPlaylist[song] = artist;
  return myPlaylist;
}

function readPlaylist (myPlaylist){
  if (Object.keys(myPlaylist).length == 0){
    console.log("your playlist is empty");
  }

  for (var key in myPlaylist){
    console.log("The song " + myPlaylist[key] + " by " + key + " is in your playlist");
  }
}