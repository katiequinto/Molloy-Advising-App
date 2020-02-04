import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import Schedule from '../components/schedule';

const Home = () => {
  return (
    <div>
      <Header />
      <Schedule />
      <Footer />
    </div>
  );
};

export default Home;
