
function updatePlaylist(playlist, artist, song){

playlist[artist]=song

return playlist;

}

var playlist={x: 'y'}
function removeFromPlaylist(playlist, artist){

delete playlist[artist]

return playlist



}
