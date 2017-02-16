var playlist = {artist: "asdf"};
// var playlist = new Object();
 
function updatePlaylist(list, artist_name, song_title) {  
    list[artist_name] = song_title; 
    return list;
}

function removeFromPlaylist(list, artistName) {
    delete list[artistName];
    return list;
}
