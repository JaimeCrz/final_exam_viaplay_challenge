import React from 'react';
import './App.css';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import DisplaysMovies from './components/DisplaysMovies.jsx'


function App() {
  return (
    <>
      <Header />
      <DisplaysMovies />      
      <Footer />
    </>
  );
}

export default App;
