import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Search from '../components/Search/Search';

const Home: React.FC = () => {
  return (
    <div>
      {/* <h1>Welcome to the Home Page</h1> */}
      <Header />
      <Search />
      <Footer />
    </div>
  );
};

export default Home;