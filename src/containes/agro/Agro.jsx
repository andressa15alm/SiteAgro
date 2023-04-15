import React from 'react';
import Feature from '../../components/feature/Feature';
import './agro.css';
const Agro = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="sobre">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Sobre Agro SV" text="Nossa empresa é a escolha certa para você porque valorizamos a qualidade e a sustentabilidade em todas as etapas do processo produtivo. Com anos de experiência e tecnologia de ponta, garantimos que nossos produtos sejam cultivados com responsabilidade ambiental e social, para fornecer alimentos saudáveis e saborosos para sua família. Conte conosco para uma agricultura moderna e consciente." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__h1">
        O fututo é uma agricultura moderna e consciente</h1>
  
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Soja" text="Libero phasellus volutpat ornare nisi sit hac lorem pharetra lorem, mattis nec donec quis metus tempus sed cubilia tortor, vitae habitant interdum non ultricies cubilia vulputate nibh." />
      <Feature title="Milho" text="Pretium pulvinar commodo congue et lobortis aliquet suscipit suspendisse conubia, orci gravida praesent elementum dictum enim scelerisque etiam, varius adipiscing " />
      <Feature title="Feijão" text="Vel conubia nibh habitant pretium facilisis orci tellus nunc, curae viverra interdum ut congue habitasse cubilia venenatis pretium, imperdiet aenean lacus nibh nam condimentum urna." />
    </div>
  </div>
  )
}

export default Agro