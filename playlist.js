'use strict';

function addToPlaylist(playlist, song, artist) {
    playlist[artist] = song;
    return playlist;
}

function removeFromPlaylist(playlist, artist) {
    delete playlist[artist];
    return playlist;
}

function changePlaylistSong(playlist, song, artist) {
    playlist[artist] = song;
    return playlist;
}

function readPlaylist(playlist) {
    if (Object.keys(playlist).length === 0) {
        console.log("your playlist is empty");
    } else {
        for (var artist in playlist) {
            console.log("The song " + playlist[artist] + " by " + artist + " is in your playlist");
        }
    }
}
