var playlist = {
  "Weezer": "Only in Dreams",
  "Modest Mouse": "Float On"
};

function updatePlaylist(pl, artist, title) {
  pl[artist] = title;
  return pl;
}

function removeFromPlaylist(pl, artist) {
  delete pl[artist];
  return pl;
}
