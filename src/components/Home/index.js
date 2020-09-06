import React from 'react';

// == pictures and style imports
import threeBalls from 'src/assets/pictures/threeBalls.jpg';
import bigPackage from 'src/assets/pictures/bigPackage.jpg';
import ballsAndRabbit from 'src/assets/pictures/ballsAndRabbit.jpg';

import './home.scss';

const Home = () => (
  <main className="main-content">
    <p className="website-description"> " Bienvenu sur le site de créations faites mains pour enfants "</p>
    <div className="pictures">
      <div className="presentation-container">
        <img src={bigPackage} alt="nécessaire de naissance (cap de bain, gant de toilette, hochet et balle de préhension" className="picture" />
        <p className="description">"Ensemble de naissance : Cape de bain, Gant de toilette, Hochet en oreilles de lapin et balle de préhension" </p>
      </div>
      <div className="presentation-container">
        <img src={threeBalls} alt="trois balles de préhension" className="picture" />
        <p className="description">"Balles de préhension en veux-tu, en voilà ! Pleins de couleurs et de textures différentes" </p>
      </div>
      <div className="presentation-container">
        <img src={ballsAndRabbit} alt="ensemble balle de préhension et hochet lapin" className="picture" />
        <p className="description">"Duo découverte avec une balle de préhension et un hochet en oreilles de lapins" </p>
      </div>
    </div>
  </main>
);

export default Home;
