var playlist = {artistName: "artistName" };


  // objects updatePlaylist(playlist, artistName, songTitle) adds the `artistName: songTitle` key-value pair to `playlist`

 function updatePlaylist(playlist,artist,song){
 	   		playlist[artist] = song;
 	   		return playlist;
 }

 function removeFromPlaylist(playlist,artistName){
 	delete playlist[artistName];
 		return playlist;
 }