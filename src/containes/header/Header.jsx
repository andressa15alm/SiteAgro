import React from 'react'
import tractor from '../../assets/tractor.png'
import './header.css'
const Header = () => {
  return (
    <div className='agro__header section__padding' id='home'>
        <div className='agro__header-content'>
            <h1 className='gradient__text'> Desde 1990 &apos; Oferecendo os Melhores Serviços e Isumos</h1>
            <p>O futuro do agronegócio está na interseção da agropecuária com a tecnologia - semeando inovação, colhendo eficiência.</p>
        </div>

        <div className='agro__header-image'>
          <img src={tractor} alt="tractor" />
        </div>
    </div>
  )
}

export default Header