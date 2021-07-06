import React,{useState,useEffect} from 'react';
import {MdFlightTakeoff}  from 'react-icons/md';
import api from '../../services/api';
import './styles.css';
export default function Home() {
  const [trips,setTrips] = useState([]);

  useEffect(()=>{
    async function loadApi(){
      const response = await api.get('trips');

      setTrips(response.data);
    }
    loadApi();
  },[])
 return (
   <div>
     <div className="box">
       {
         trips.map(trip =>(
           <li key={trip.id}>
              <img src={trip.image} alt={trip.title} />
              <strong>{trip.title}</strong>
              <span>Status: {trip.status ? 'Disponível' : 'Indisponivel'}</span>
              <button 
              type="button"
              onClick={()=>{}}
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