// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Home />
    <Footer />
  </div>
);

// == Export
export default App;
