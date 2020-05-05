import React from 'react'
import { selectSong } from '../actions'
import { connect } from 'react-redux'

export const SongList = ({ songs, selectSong }) => {
  return (
    <div className='ui divided list' style={{ marginTop: '40px' }}>
      {songs.map(song => (
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button
              onClick={() => selectSong(song)}
              className='ui button primary'
            >
              Select
            </button>
          </div>
          <h3>{song.title}</h3>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return { songs: state.songs }
}

// const mapDispatchToProps = {}
// mapDispatchToProps
export default connect(mapStateToProps, { selectSong })(SongList)
