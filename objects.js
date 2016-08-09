var playlist = { Unloved: "Guilty of Love", Broadcast: "Black Cat", Spiritualize: "Electricity"  };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function  removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
