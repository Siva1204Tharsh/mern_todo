import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Styles.css'

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);








  return (
    <div >
      <h1>Todo_App</h1>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button onClick={addTodo}>Add_Todo</button>
      <ul>
         
      </ul>
    </div> 
  );


}