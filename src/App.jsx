import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Blog from './Components/Blog/Blog'
import Card from './Components/Card/Card'
import Nav from './Components/Nav/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav></Nav>
      <hr />
      <Card></Card>
      <Blog></Blog>
       
    </div>
  )
}

export default App;
