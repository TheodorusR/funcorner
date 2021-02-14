import React from 'react';
import gunShot from '../../audio/gunShot.mp3';
import reload from '../../audio/reload.mp3';
import dryFiring from '../../audio/dryFiring.mp3';

const GunSounds = () => {
  return (
    <div>
      <audio id='gunShot'>
        <source src={gunShot} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <audio id='reloadGun'>
        <source src={reload} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <audio id='dryFiring'>
        <source src={dryFiring} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default GunSounds;
