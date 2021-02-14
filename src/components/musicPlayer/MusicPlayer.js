import React, {useState} from 'react';
import {Collapse, Button}  from 'reactstrap';

const MusicPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='music-container'>
      <div className='spotify-container'>
        <Collapse isOpen={isOpen}>
          <iframe 
            src="https://open.spotify.com/embed/playlist/37i9dQZF1E8IzyLat0sEu0" 
            width="280" 
            height="300" 
            frameborder="0" 
            allowtransparency="true" 
            allow="encrypted-media"
          ></iframe>
        </Collapse>
      </div>
      <Button
        color= {isOpen ? 'secondary' : 'success'}
        onClick={() => setIsOpen(!isOpen)}
      ><i className='fa fa-spotify fa-2x'></i></Button>
    </div>
  )
}

export default MusicPlayer
