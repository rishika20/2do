
import './App.css';
import Form from './components/Form';
import React,{useState,useEffect} from 'react'
import Todo from './components/Todo';

function App() {
  const [input, setinput] = useState('')
  const [todos, settodos] = useState([])
  const [status, setstatus] = useState("all")
  const [filter, setfilter] = useState([])
  
 
  const Handler=()=>
  {
    switch(status)
    {
      case "completed":
        setfilter(todos.filter(tod=>tod.completed===true))
        break
        case "uncompleted":
          setfilter(todos.filter(tod=>tod.completed===false))
          break
      default:
        setfilter(todos)
    }
  }
  useEffect(() => {
    Handler()
  
  }, [todos,status])

  return (
    <div className="App">
     <header className="head">Todo list </header>
  <Form todos={todos} settodos={settodos} input={input} setinput={setinput} setstatus={setstatus}/>
  <Todo todos={todos} settodos={settodos} filter={filter}/>
    </div>
  );
}

export default App;
