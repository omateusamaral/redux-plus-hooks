import React from 'react';
import { MdDelete } from 'react-icons/md';
import './styles.css';
export default function Books() {
  return (
    <div>
      <h1 className="title">Você solicitou 1 reservas</h1>
      <div className="reservas">
        <img
          src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg"
          alt="maceio"
        />
        <strong>viagem maceio 7 dias</strong>
        <span>quantidade: 2</span>
        <button
          type="button"
          onClick={() => { }}
        >
          <MdDelete size={20} color="#191919" />

        </button>
      </div>
      <footer>
        <button type="button">
          Solicitar Reservas
        </button>
      </footer>
    </div>
  );
}