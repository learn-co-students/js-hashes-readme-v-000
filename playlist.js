'use strict';

// var hash = {playboicarti: "rapper"};

// hash["ziggy"] = "rapper"; // delete hash["ziggy"];

// Object.keys(hash); to check if object is empty

// Object.keys(hash).length; to check object length

// for (var key in hash) {
//  console.log(key + " is a " + hash[key]);
// }

var myPlaylist = {};

function addToPlaylist(playlist, song, artist) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}

function changePlaylistSong(playlist, song, artist) {
  playlist[artist] = song;
  return playlist;
}

function readPlaylist(playlist) {
  if (Object.keys(playlist).length !== 0) {
    for (var key in playlist) {
      console.log("The song " + playlist[key] + " by " + key + " is in your playlist");
    }
  }
  else {
    console.log("your playlist is empty");
  }
}
