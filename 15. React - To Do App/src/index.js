import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'; 
import TodoApp from './TodoApp';

const App = () => (
  <div id="root">
    <TodoApp />
  </div>
);

ReactDOM(<App />, document.getElementById('root'));
