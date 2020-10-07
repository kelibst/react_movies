import React from 'react';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import Movies from './components/layouts/Movies';

function App() {
  return (
    <div className="App">
      <Header />
      <Movies />
      <Footer/>
    </div>
  );
}

export default App;
