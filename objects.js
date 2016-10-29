var playlist = {'P.O.D.': 'Boom'};

function updatePlaylist(playlist, artistName, songTitle) {
  // This only implements a one-to-one, not a has-many relationship.
  playlist[`${artistName}`] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
