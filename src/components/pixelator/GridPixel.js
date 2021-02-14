import React from 'react';
import {animated, useSpring} from 'react-spring';

const GridPixel = ({pixel}) => {
  const props = useSpring({
    config: {
      duration: 1500
    },
    to: pixel%2 == 0 ? {backgroundColor: '#4a6274', rotateY: 0} : {backgroundColor: '#94acbf', rotateY: 180},
    from: {backgroundColor: '#4a6274', rotateY: 0}
  })

  return (
    <animated.div className='grid-pixel' style={{
      ...props,
      transform: props.rotateY.interpolate(y => `rotateY(${y}deg)`)
    }}>
    </animated.div>
  )
}

export default GridPixel
