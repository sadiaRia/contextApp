import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';
// class BookList extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
//       <div className='book-list' style={{color:theme.syntax,background:theme.bg}}>
//         <ul>
//           <li style={{background:theme.ui}}>Rasha</li>
//           <li style={{background:theme.ui}}>Ami Topu</li>
//           <li style={{background:theme.ui}}>Ekaras</li>
//         </ul>
//       </div>

//     );aƒ
//   }
// }

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  console.log(books);
  const theme = isLightTheme ? light : dark;
  return (
    <div className='book-list' style={{ color: theme.syntax, background: theme.bg }}>
      <ul>
        {books.map(book =>
          <li key={book.id} style={{ background: theme.ui }}> {book.title}</li>
        )}
        {/* <li style={{ background: theme.ui }}>Rasha</li>
        <li style={{ background: theme.ui }}>Ami Topu</li>
        <li style={{ background: theme.ui }}>Ekaras</li> */}
      </ul>
    </div>

  );
}

export default BookList;
// export default BookList;

