import React, {useState} from 'react';
import {motion} from 'framer-motion';

const TargetFace = ({targetLevel, handleFire, rounds}) => {
  const [shot, setShot] = useState(false);

  return (
    <motion.div 
      className={'pole-branch ' + targetLevel}
      initial={{rotateY: 0}} 
      animate={{rotateY: shot ? -180 : 0}}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      <div onClick={(e) => {
        if(rounds > 0) {
          setShot(!shot);
        }
        handleFire();
      }} className='target-face'></div>
    </motion.div>
  )
}

export default TargetFace
