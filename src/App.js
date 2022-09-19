import React from 'react';
import Home from './pages/Home/Home';
import Footer from './rezability-components/Footer/Footer';
import Header from './rezability-components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

console.log('ладно');
function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" />
            <Route path="/features" />
            <Route path="/pricing" />
            <Route path="/documentation" />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
