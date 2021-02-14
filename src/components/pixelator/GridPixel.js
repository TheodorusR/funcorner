import React from 'react';
import {motion} from 'framer-motion';

const GridPixel = ({pixel}) => {
  // const props = useSpring({
  //   config: {
  //     duration: 1500
  //   },
  //   to: pixel%2 == 0 ? {backgroundColor: '#4a6274', rotateY: 0} : {backgroundColor: '#94acbf', rotateY: 180},
  //   from: {backgroundColor: '#4a6274', rotateY: 0}
  // })

  return (
    <motion.div className='grid-pixel' 
      initial={{backgroundColor: '#4a6274', rotateY: 0}} 
      animate={pixel%2 == 0 ? {backgroundColor: '#4a6274', rotateY: 0} : {backgroundColor: '#94acbf', rotateY: 180}}
      transition={{
        duration: 2
      }}
    >
    </motion.div>
  )
}

export default GridPixel
