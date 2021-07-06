import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './styles.css';
export default function Header() {
 return (
   <header className="container">
     <Link to="/">
     <img  className="logo" src={Logo} alt="Logo do projeto" />
     </Link>
     <Link to="/books">
       <div>
         <strong>Minhas Reservas</strong>
         <span>0 reservas</span>
       </div>
     </Link>
   </header>
  );
}