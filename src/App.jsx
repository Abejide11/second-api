import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import style from './Component/App.module.css'
import axiox from 'axios'
import Todos from './Component/Todos'

function App() {

  const [todos, setTodos] = useState(null)
  useEffect(
    () => {
      axiox.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setTodos(res.data));

    }, []
  );
  return (
    <Todos todo={todos}/>
  )
}

export default App

