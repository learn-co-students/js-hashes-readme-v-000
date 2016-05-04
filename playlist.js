'use strict';
var myPlaylist = {};

function addToPlaylist(tracks, track_name, artist_name){
  tracks[artist_name] = track_name;
  return tracks;
};

function removeFromPlaylist(tracks, artist_name){
  delete tracks[artist_name];
  return tracks;
};

function changePlaylistSong(tracks, track_name, artist_name){
  tracks[artist_name] = track_name;
  return tracks;
};

function readPlaylist(tracks){
  if (Object.keys(tracks).length!==0){
    for (var key in tracks){
      console.log("The song " + tracks[key] + " by " + key + " is in your playlist");
    }
  } else {
    console.log("your playlist is empty");
  }
};
