'use strict';

function addToPlaylist(object, song, artist) {
	object[artist] = song;
	return object;
}

function removeFromPlaylist(object, artist) {
	delete object[artist];
	return object;
}

function changePlaylistSong(object, song, artist) {
	object[artist] = song;
	return object;
}

function readPlaylist(object) {
	if (Object.keys(object).length === 0) {
		console.log("your playlist is empty"); 
	} else {
		for ( var key in object) {
			console.log("The song " + object[key] + " by " + key + " is in your playlist");
		}
	}
}