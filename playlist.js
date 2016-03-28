'use strict';

var myPlaylist = {}

// var meals = {breakfast: "oatmeal"};

function addToPlaylist(myPlaylist, song, artist) {
  myPlaylist[artist] = song;
  return myPlaylist;
}

function removeFromPlaylist(myPlaylist, artist) {
  delete myPlaylist[artist];
  return myPlaylist;
}

function changePlaylistSong(myPlaylist, song, artist) {
  myPlaylist[artist] = song;
  return myPlaylist;
}

function readPlaylist(myPlaylist) {
  if (Object.keys(myPlaylist).length > 0) {
    for (var key in myPlaylist) {
    console.log("The song " + myPlaylist[key] + " by " + key + " is in your playlist");
    }
  } else {
    console.log("your playlist is empty");
  }
  
}