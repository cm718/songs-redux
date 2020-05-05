import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ({ song }) => {
  return (
    <div style={{ marginTop: '40px' }}>
      <h1>Song Details:</h1>
      <h2>Title: {song && song.title}</h2>
      <h3>Duration: {song && song.duration}</h3>
    </div>
  )
}

const mapStateToProps = ({ selectedSong }) => {
  return { song: selectedSong }
}

export default connect(mapStateToProps)(SongDetail)
