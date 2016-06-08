var playlist = {namea: "songtitle1", nameb: "songtitle2"};

function updatePlaylist(playlist, name, title){
	playlist[name] = title;
	return playlist;
}

function removeFromPlaylist(object, name){
	delete object[name];
	return object;
}
