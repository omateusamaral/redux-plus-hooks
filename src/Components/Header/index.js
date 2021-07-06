import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './styles.css';
export default function Header() {
  //pega o estado do rootreducer que o rootreducer pega do reducer
  const bookSize = useSelector(state => state.books);
  return (
    <header className="container">
      <Link to="/">
        <img className="logo" src={Logo} alt="Logo do projeto" />
      </Link>
      <Link className="reserva" to="/books">
        <div>
          <strong>Minhas Reservas</strong>
          <span>{bookSize.length} reservas</span>
        </div>
      </Link>
    </header>
  );
}