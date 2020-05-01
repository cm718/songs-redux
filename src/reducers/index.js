import { combineReducers } from 'redux'

export const songsReducer = () => {
  return [
    { title: 'Singing in the Rain', duration: '4:05' },
    { title: 'All Star', duration: '2:30' },
    { title: 'I Want It That Way', duration: '1:45' },
    { title: 'Macarena', duration: '2:46' },
  ]
}

export const selectedSongReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case 'SONG_SELECTED':
      return action.payload
    default:
      return selectedSong
  }
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
})
