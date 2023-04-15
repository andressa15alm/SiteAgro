import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';

import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='agro__navbar'>
      <div className='agro__navbar-links'>
          <div className='agro__navbar-link_logo'>
            <img src={logo} alt='logo'/>
          </div>

          <div className='agro__navbar-links_container'>
              <p><a href="#home">Home</a></p>
              <p><a href="#sobre">Sobre</a></p>
              <p><a href="#servicos">Serviços</a></p>
              <p><a href="#produtos">Produtos</a></p>
              <p><a href="#eventos">Eventos</a></p>
              <p><a href="#contato">Contato</a></p>
          </div>


      </div>
      <div className="agro__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="agro__navbar-menu_container scale-up-center">
          <div className="agro__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#sobre">Sobre</a></p>
              <p><a href="#servicos">Serviços</a></p>
              <p><a href="#produtos">Produtos</a></p>
              <p><a href="#eventos">Eventos</a></p>
              <p><a href="#contato">Contato</a></p>
          </div>
          
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar