import React, { useEffect, useState } from 'react';
import shootingBackground from '../../img/shootingBackground.jpg';
import TargetFace from './TargetFace';
import Round from './Round';
import { motion, useMotionValue } from 'framer-motion';
import GunSounds from './GunSounds';


const ShootingRange = () => {
  const branches = ['top', 'middle', 'bottom'];
  const [rounds, setRounds] = useState(6);
  const [magazine, setMagazine] = useState([]);
  const x = useMotionValue(0);
  const shotSound = document.querySelector('#gunShot');
  const dryFireSound = document.querySelector('#dryFiring');

  const handleFire = () => {
    if(rounds > 0) {
      shotSound.currentTime = 0;
      shotSound.play();
      setRounds(rounds-1);
    } else {
      dryFireSound.currentTime = 0;
      dryFireSound.play();
    }
  }

  useEffect(() => {
    const newMagazine = [];
    for (let i=0; i<rounds; i++) {
      newMagazine.push(i);
    }
    setMagazine(newMagazine);
  }, [rounds]);

  useEffect(() => {
    const unsubscribeX = x.onChange(() => {
      if (x.get() > 40) {
        const reloadSound = document.querySelector('#reloadGun');
        reloadSound.play();
        setRounds(6);
      }
    })
    
    return () => {
      unsubscribeX();
    }
  }, []);

  return (
    <div className="shooting-wrapper">
      <p>How about some rounds of "pew! pew!"?</p>
      <div className="shooting-container" >
        <img draggable='false' src={shootingBackground} onClick={handleFire} alt='shooting range background' />
        <div className='vertical-pole'></div>
        {branches.map((target, index) => (<TargetFace rounds={rounds} handleFire={handleFire} key={index} targetLevel={target}/>))}
        <div className='rounds-container'>
          {magazine.map((round) => (<Round key={round} />))}
        </div>
        <motion.div
          className='reload'
          style={{x}}
          drag='x'
          dragConstraints={{left:0, right:0}}
          onClick={() => alert('Drag right to reload')}
        >
          {". . . RELOAD >>>"}
        </motion.div>
        <GunSounds />
      </div>
    </div>
    
  )
}

export default ShootingRange
