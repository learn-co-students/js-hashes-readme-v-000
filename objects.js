var playlist ={ artistName: "songTitle" };
function updatePlaylist(playlist, artistName, songTitle){
    playlist[artistName]=songTitle; //add artistName key pair value in the playlist object
    return playlist;
}
function removeFromPlaylist(playlist, artistName) {
  for (artistName in playlist) {
    delete playlist[artistName]; //iterate and delete every artistName key pair value in the playlist object
}
  return playlist;
}
