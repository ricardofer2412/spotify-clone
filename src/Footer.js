import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__left'>
        <img className='footer-album-logo'
          src="data:image/jpeg;base64,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" alt="" />
        <div className="footer__songInfo">
          <h4>Hello Baby!!</h4>
          <p>Ricky</p>
        </div>
      </div>
      <div className='footer__center'>
        <ShuffleIcon className='footer__green' />
        <SkipPreviousIcon className='footer__icon' />
        <PlayCircleOutlineIcon fontSize='large' className='footer__icon' />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />

      </div>
      <div className='footer__right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer
