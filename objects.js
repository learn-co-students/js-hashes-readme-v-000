var playlist = {phil_collins: "I can't dance", mj: "PYT"};

function updatePlaylist(a_playlist, artistName, songTitle) {
	a_playlist[artistName] = songTitle;
	return a_playlist;
}

function removeFromPlaylist(a_playlist, artistName) {
	delete a_playlist[artistName];
	return a_playlist;
}