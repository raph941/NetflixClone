import React from 'react';
import './styles/App.css';
import Row from './components/Row';
import Banner from './components/Banner'
import Nav from './components/Nav'
import requests from './requests';


function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Nav />
      {/* Banner compponent */}
      <Banner />
      {/* Component for the different categories of moives */}
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;