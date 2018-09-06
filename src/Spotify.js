import React from 'react'

const Spotify = props => {
  return (
    <div>
      <div class='center'><h1 class='name'>Xander <b>UI</b></h1>
        <div class='player'>
          <div class='info'>
            <img src={props.imageUrl} alt='album artwork' class='icon'/>
            <div class='track-info'>
              <div class='title'>{props.song}</div>
              <div class='author'>{props.artist}</div>
            </div>
          </div>
          <div class='controls'>
          <div class='time-current'>{props.currentposition}</div>
            <div class='bar'>
              <div class='progress' style={{width: props.barstate}}></div>
            </div>
            <div class='time-left'>{props.timeleft}</div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Spotify