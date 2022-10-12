import React from 'react';
import './App.css';
import { Counter } from './features/counter/Counter';
import { User } from './features/user/User';
import { Categories } from './features/categories/Categories';

function App() {
  return (
    <div className="App">
      <Categories />
      {/* <User/> */}
    </div>
  );
}

export default App;
