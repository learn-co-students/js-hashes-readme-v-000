var playlist = {nelly: "country grammar", blakeshelton: "country", ladygaga: "poker face"};

function updatePlaylist(object, artist, song) {
object[artist] = song;
return object;
}

function removeFromPlaylist(playlist,artist) {
  delete playlist[artist];
  return playlist;
}