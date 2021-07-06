import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import './styles.css';
export default function Books() {
  const books = useSelector(state => state.books);
  const dispatch = useDispatch();

  function handleRemoveBook(id) {
    dispatch({
      type: 'REMOVE_BOOK',
      id,
    });
  }
  return (
    <div>
      <h1 className="title">Você solicitou {books.length} reservas</h1>
      {
        books.map((book) => (
          <div className="reservas" key={book.id}>
            <img
              src={book.image}
              alt={book.title}
            />
            <strong>{book.title}</strong>
            <span>quantidade:{book.amount}</span>
            <button
              type="button"
              onClick={() => handleRemoveBook(book.id)}
            >
              <MdDelete size={20} color="#191919" />

            </button>
          </div>
        ))
      }

      <footer>
        <button type="button">
          Solicitar Reservas
        </button>
      </footer>
    </div>
  );
}