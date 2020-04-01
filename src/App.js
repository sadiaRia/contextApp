import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ToggleTheme from './components/ToggleTheme';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ToggleTheme />
      </ThemeContextProvider>
    </div>

  );
}

export default App;
