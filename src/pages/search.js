import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SearchComponent from '../../components/SearchComponent';

function search() {
  
  return (
    <div>
      {/* Header */}
      <Header />
      <SearchComponent/>
      <Footer />
    </div>
  );
}

export default search;
