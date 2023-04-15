import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Cultivando o melhor para você',
    text: 'Vel conubia nibh habitant pretium facilisis orci tellus nunc, curae viverra interdum ut congue habitasse cubilia venenatis pretium, imperdiet aenean lacus nibh nam condimentum urna. nullam pretium euismod etiam placerat ornare velit himenaeos, erat taciti gravida amet eros rhoncus mattis ligula, varius vel sapien nulla nisi elit. ',
  },
  {
    title: 'Cultivando vidas',
    text: 'Vel conubia nibh habitant pretium facilisis orci tellus nunc, curae viverra interdum ut congue habitasse cubilia venenatis pretium, imperdiet aenean lacus nibh nam condimentum urna. nullam pretium euismod etiam placerat ornare velit himenaeos, erat taciti gravida amet eros rhoncus mattis ligula, varius vel sapien nulla nisi elit. ',
  },
  {
    title: 'Cultivando solidariedade',
    text: 'ByVel conubia nibh habitant pretium facilisis orci tellus nunc, curae viverra interdum ut congue habitasse cubilia venenatis pretium, imperdiet aenean lacus nibh nam condimentum urna. nullam pretium euismod etiam placerat ornare velit himenaeos, erat taciti gravida amet eros rhoncus mattis ligula, varius vel sapien nulla nisi elit. ',
  },
  {
    title: 'Cultivando melhorias',
    text: 'Reallynow.Vel conubia nibh habitant pretium facilisis orci tellus nunc, curae viverra interdum ut congue habitasse cubilia venenatis pretium, imperdiet aenean lacus nibh nam condimentum urna. nullam pretium euismod etiam placerat ornare velit himenaeos, erat taciti gravida amet eros rhoncus mattis ligula, varius vel sapien nulla nisi elit. ',
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__texto">O futuro é hoje, andanos de mão dadas com o desenvolvimento sustentavel.</h1>
      <p>Conectados com a sociedade </p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
  )
}

export default Features