import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Greeting from './Components/Greetings.jsx'
import Card from './Components/Card.jsx'
import Counter from './Components/Counter.jsx'
import TodoList from './TodoList.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Hello World
      <div>
        <Greeting />
        <Greeting />
        <hr />
      </div>
      <div>
        <Card name="Omar" role="Tutor" />
        <Card name="Sarah" role="Manager" />
      </div>
      <hr />
      <div>
        <Counter />
      </div>

      <div>
        <TodoList />
      </div>

    </>
  );
}

export default App
