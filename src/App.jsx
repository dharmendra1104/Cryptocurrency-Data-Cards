// import { useState } from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Data from './component/Data'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Data/>
        <Footer />
      </div>
    </>
  )
}

export default App
