var playlist = {mj: "Billy Jean"};

function updatePlaylist(playlist, artistName, songTitle) {
  if (Object.keys(playlist).length === 0) {
    var currentPlaylist = playlist;
    currentPlaylist[artistName] = songTitle;
    return currentPlaylist;
  } else {
    for (var key in playlist) {
      key === artistName ? playlist[key] = songTitle : playlist[artistName] = songTitle;
    }
    return playlist;
  }
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
