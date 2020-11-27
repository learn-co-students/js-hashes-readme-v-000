var song;
var playlist = {"artist": song};

function updatePlaylist(playlist, artist, song){
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(song, artist){
  delete playlist.artist;
  return playlist;
}