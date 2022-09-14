import React from 'react';
import Home from './pages/Home/Home';
import Footer from './rezability-components/Footer/Footer';
import Header from './rezability-components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
