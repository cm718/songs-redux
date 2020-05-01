import React from 'react'
import { connect } from 'react-redux'

export const SongList = ({ songs }) => {
  console.log('songs', songs)
  return (
    <div className='ui divided list'>
      {songs.map(song => (
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button className='ui button primary'>Select</button>
          </div>
          <div className='content'>{song.title}</div>
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
export default connect(mapStateToProps)(SongList)
