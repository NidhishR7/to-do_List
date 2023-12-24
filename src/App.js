// App.js

import React from 'react';
import TodoList from './todo';
import './App.css';
function App() {
  return (
    <div className="App">
      <TodoList />
      <div className='footer'>
        <p>
          © TO-DO List by <a href='/' className='nidhish'>Nidhish</a> | 2023
        </p>
      </div>
    </div>
  );
}

export default App;
