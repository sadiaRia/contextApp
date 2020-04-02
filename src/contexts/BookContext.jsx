import React, { useState, createContext } from 'react'

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBook] = useState([
    { title: 'Rasha', id: 1 },
    { title: 'Ami Topu', id: 2 },
    { title: 'Lord of the Rings', id: 3 },
    { title: 'Ekaras', id: 4 },
    { title: 'Moyurakhi', id: 5 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;