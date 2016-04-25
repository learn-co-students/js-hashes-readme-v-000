'use strict';


function addToPlaylist(myPlaylist, title, artist){

  myPlaylist[artist] = title;
  return myPlaylist
}

function removeFromPlaylist(myPlaylist, artist){

  delete myPlaylist[artist];
  return myPlaylist
}

function changePlaylistSong(myPlaylist, style, artist){
  myPlaylist[artist] = style;
  return myPlaylist;
}

function readPlaylist(myPlaylist){

 if (Object.keys(myPlaylist).length ===0 ){
   console.log("your playlist is empty");
 } else {
  for (var artist in myPlaylist){
    console.log("The song "+ myPlaylist[artist] + " by " + artist + " is in your playlist" );
  }
}
}


//   for(var i=0; i < Object.keys(myPlaylist).length; i++){
//   console.log("The song "+ myPlaylist[Object.keys(myPlaylist)[i]] + " by " + Object.keys(myPlaylist)[i] + " is in your playlist" );
// };
