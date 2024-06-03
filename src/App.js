import React from 'react';
import { Route, Routes, } from 'react-router-dom';
import Home from './pages/Home';
import CarouselPage from './pages/carouselpage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carousel" element={<CarouselPage />} />
      </Routes>
    </div>
  );
}

export default App;
