var artistName = "";
var songTitle  = "";
var playlist   = {artistName: songTitle};


function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  for(var key in playlist){
    if(key == artistName){
      delete playlist[key];
    }
  }
  return playlist;
}
