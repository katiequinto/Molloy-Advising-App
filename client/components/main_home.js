import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import HomePage from '../components/home_page';

const Home = () => {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

export default Home;