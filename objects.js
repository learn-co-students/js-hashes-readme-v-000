var playlist = {artist: 'title'}

function updatePlaylist(playlist, artist, title){
  playlist[artist] = title;
  return playlist;
}

function removeFromPlaylist(playlist, title){
  delete playlist[title];
  return playlist;
}
