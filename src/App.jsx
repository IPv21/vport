import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import TheMan from './pages/theman'
import TheWorks from './pages/theworks';
import TheCall from './pages/thecall';
import Landing from './pages/landing';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/TheMan" element={<TheMan />} />
          <Route path="/TheWorks" element={<TheWorks />} />
          <Route path="/TheCall" element={<TheCall />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
