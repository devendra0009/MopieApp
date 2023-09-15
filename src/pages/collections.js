import React from 'react';
import Nopage from '../../components/Nopage';
import CollectionComponent from '../../components/CollectionComponent';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function collections() {
  return (
    <div>
      <Header />
      <CollectionComponent />
      <Footer />
    </div>
  );
}

export default collections;
