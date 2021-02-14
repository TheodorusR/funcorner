import React, {useState, useEffect} from 'react';
import GridPixel from './GridPixel';
import {patternMaker} from './patternMaker';
import pixelator from '../../img/pixelator.png';


const GridContainer = () => {
  const [text, setText] = useState('');
  const [pixels, setPixels] = useState([]);

  useEffect(() => {
    //patterns is not updated properly with state hook
    const patterns = patternMaker(text);
    let counter = 0;
    setPixels(patterns[counter]);
    const timer = setInterval(()=> {
      if (counter < patterns.length-1) {
        counter += 1;
      } else {
        counter = 0;
      }
      setPixels(patterns[counter]);
    }, 2500);
    
    return () => {
      clearInterval(timer);
      console.log(text);
    }
    
  },[text])

  return (
    <div className='grid-wrapper'>
      {pixels ? 
        <div className='grid-container'>
          {pixels.map((pixel, index) => {
              return (
                <GridPixel 
                  key={index} 
                  pixel={pixel}
                />
              )
            }
          )}
        </div> :
      "Nothing To Show"}
      
      <label htmlFor='pixelator-input'>
        Try my <img className='img-fluid' width='200' height='50' src={pixelator} alt='pixelator logo' />
      </label>
      <input 
        type='text' 
        id='pixelator-input'
        className='form-control w-50 my-2'
        value={text} 
        onChange={(e) => setText(e.target.value)}
        placeholder='Hello There'
      />
      <small>
        <em><b>NOTE: AlphaNumeric</b> only. Each word can only have <b>7 or less</b> letters ;)</em>
      </small>
      
    </div>
    
  )
}

export default GridContainer
