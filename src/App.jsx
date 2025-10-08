import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import H1 from './H1'
import Contact from './contact'
import FunctionComponent from './FunctionComponent'
import Component1 from './Component1'
import Component2 from './Component2'
import Task from './Task'
import Mental from './test'
import Routing_Mechanism from './Routing_Mechanism'
import ImageEntity_TemporaryPath from './ImageEntitty_TemporaryPath'



function App() {
  // //   const [count, setCount] = useState(0)
  //     var images=[{
  //        "image":reactLogo,
  //        "price":12000,
  //        "brand": "crocs"

  //     },{"image":reactLogo,
  //        "price":19000,
  //        "brand": "sketchers"}]

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <H1 /> */}
      {/* <Contact /> */}
      {/* <div className="parent">
    {
        images.map(ele=>{
          return  <FunctionComponent data={ele}/>
        })
    }
    </div> */}
      {/* <Component1 />
      <Component2 /> */}
      {/* <Task /> */}
      {/* <Mental /> */}
      {/* <Routing_Mechanism/> */}
      <ImageEntity_TemporaryPath />
    </>
  )

}

export default App
