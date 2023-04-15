import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';
const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4> pulvinar dictum blandit </h4>
      <h1 className="gradient__texto">Lorem ipsum ultrices auctor placerat nullam  <br /> Lorem ipsum ultri</h1>
      <p>  Pharetra tempus enim dolor phasellus fringilla congue ac conubia proin, integer sollicitudin leo felis ultricies ipsum cubilia cras, fermentum ante eget eleifend rhoncus orci massa ac. pulvinar dictum blandit ut vivamus class quisque venenatis urna scelerisque, euismod accumsan turpis hendrerit curabitur turpis accumsan convallis, habitant dolo</p>
      <h4>Vemha fazer parte do futuro</h4>
    </div>
  </div>
  )
}

export default Possibility