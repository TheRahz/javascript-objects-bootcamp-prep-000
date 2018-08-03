<<<<<<< HEAD
var playlist = {'Phil Ochs': 'Here\'s to the State of Mississippi'}

function updatePlaylist (playlist, artistName, songTitle)
{
  Object.assign({}, playlist, {artistName: songTitle})
  return playlist
}

function removeFromPlaylist (playlist, artistName)
{
  delete playlist[artistName]
=======
var playlist = {}
var artistName = {}
var songTitle = {}

function updatePlaylist (playlist, artistName, songTitle)
{
  playlist.artistName = songTitle
  return playlist
}

function removePlaylist (playlist, artistName)
{
  delete playlist.artistName
>>>>>>> 111c3d77d1ad8fd8f97e8ffd1758a047168d61f6
  return playlist
}