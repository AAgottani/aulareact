import React, { useState } from 'react'
import './App.css'
import Tasks from './components/Tasks'

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

        },
        {
          id: 2,
          title:'ler livros',
          completed: true,
  
          },
          {
            id: 2,
            title:'ler livros',
            completed: true,
    
            }
          

  ]);
  return(
    <div>

    <div className='container'>{}
    <Tasks tasks={tasks}/>
     </div>
   
    </div>
  );
};


export default App;