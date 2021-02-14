import Header from './components/ui/Header';
import Background from './components/ui/Background';
import Pixelator from './components/pixelator/Pixelator';
import './App.css';
import ShootingRange from './components/shooting/ShootingRange';
import MusicPlayer from './components/musicPlayer/MusicPlayer';
import MemeGallery from './components/memeGallery/MemeGallery';

function App() {
  return (
    <div className="container container-fluid">
      <Background />
      <Header />
      <Pixelator />
      <ShootingRange />
      <MusicPlayer />
      <MemeGallery />
    </div>
  );
}

export default App;
