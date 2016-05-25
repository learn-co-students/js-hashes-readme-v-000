var playlist = {"eminem": "slim shady"}

function updatePlaylist(pl, artist, title) {
	pl[artist] = title;
	return pl;
}

function removeFromPlaylist(pl, artist) {
	delete pl[artist];
	return pl;
}