/*
vamos usar a home como exemplo

para disparar um ação é necessário pegar a função useDispacth do react-redux

e nela passamos a função que queremos chamar neste exemplo é a "addBook"
*/
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {addBookRequest} from '../../store/modules/books/actions';
import { MdFlightTakeoff } from 'react-icons/md';
import api from '../../services/api';
import './styles.css';
export default function Home() {
  const dispatch = useDispatch();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function loadApi() {
      const response = await api.get('trips');

      setTrips(response.data);
    }
    loadApi();
  }, []);

  function handleAdd(id) {
    dispatch(addBookRequest(id));
  }
  return (
    <div>
      <div className="box">
        {
          trips.map(trip => (
            <li key={trip.id}>
              <img src={trip.image} alt={trip.title} />
              <strong>{trip.title}</strong>
              <span>Status: {trip.status ? 'Disponível' : 'Indisponivel'}</span>
              <button
                type="button"
                onClick={() => handleAdd(trip.id)}
              >
                <div>
                  <MdFlightTakeoff size={16} color="#fff" />
                </div>
                <span>Solicitar Reserva</span>
              </button>
            </li>
          ))
        }
      </div>
    </div>
  );
}