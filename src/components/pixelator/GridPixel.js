import React from 'react';
import {motion} from 'framer-motion';

const GridPixel = ({pixel}) => {

  return (
    <motion.div className='grid-pixel' 
      initial={{backgroundColor: '#4a6274', rotateY: 0}} 
      animate={pixel%2 == 0 ? {backgroundColor: '#4a6274', rotateY: 0} : {backgroundColor: '#94acbf', rotateY: 180}}
      transition={{
        duration: 1.5
      }}
    >
    </motion.div>
  )
}

export default GridPixel
