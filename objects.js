var playlist = {metallica: "Enter Sandman", slayer: "Reign in Blood", bingCrosby: "White Christmas" }


function updatePlaylist(list, artist, song) {
  list[artist] = song;
  return list;
}

function removeFromPlaylist(list, artist) {
  delete list[artist];
  return list;
}