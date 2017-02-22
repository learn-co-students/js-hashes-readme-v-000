var playlist = new Object();

//function updatePlaylist(playlist, name, song) {
//var playlist = {"name": "song"}
//for (var name in playlist){
//playlist["name"] = "song"
//}
//return playlist
//}

function updatePlaylist(playlist, name, song) {
  playlist["name"] = "song"
  return playlist
}

function removeFromPlaylist(playlist, name) {
    delete playlist["name"];
	playlist;
}
