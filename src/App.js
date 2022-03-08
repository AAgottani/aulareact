import React, { useState } from 'react'
import './App.css'

const App = ()=>{
  // let message= 'Hello World'
  const [tasks,setTasks]=useState([
    {

        id: 1,
        title: 'Estudar programação',
        completed: false
    },
    {
        id: 2,
            title:'ler livros',
        completed: true,

        }



  ]);
  return(
    <div>

    <div className='container'>{message} </div>

    <button onClick={()=> setMessage ("hellooo")} > Mudar Mensagem </button>

    </div>
  );
};


export default App;