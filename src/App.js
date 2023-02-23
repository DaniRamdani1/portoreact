import React from 'react'
import About from './components/About';
import Boxtext from './components/Boxtext';
import Footer from './components/Footer';
import Galeri from './components/Galeri';
import Hero from './components/Hero';
import Kegiatan from './components/Kegiatan';
import Navbar from './components/Navbar';

function App()  {
  return (
    <div>

      <Navbar />
      <Hero />
      <About />
      <Kegiatan />
      <Boxtext />
      <Galeri />
      <Footer />
    </div>
  );
}


export default App;