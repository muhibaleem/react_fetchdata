import React from 'react';
import { useState , useEffect } from 'react';

function App() {

  let data = {title: "Waiting for data"};
  const [todo, setTodo] = useState(data);

  const[isFetching, setFetching] = useState(false);

  useEffect(()=>{
    async function fetchData(){
      setFetching(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      console.log("response =", response);

      let data2 = await response.json();
      setTodo(data2);
      setFetching(false);
      console.log("Data= ", todo);
    }

    fetchData();
  },[]);

  if(isFetching){
    return <div>Data Loading..</div>
  }

  return (
    <div >
      <h1>GET DATA </h1>
      <h3>Title : {todo.title}</h3>
    </div>
  );
}

export default App;
