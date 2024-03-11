import Pizza from "./components/Pizza"
import Button from "./components/Button"



import { useState } from "react"

function App() {
  const [count, setCount] = useState(1)
  const [pizza, setPizza] = useState([])

  function addPizza() {
   setPizza([...pizza, count])
  }



  return (
    <>
      
      <Button onClick={addPizza} count={count} setCount={setCount} />

      <div className="pizza-container">
        {pizza.map(p => <Pizza ost="ost" peperoni="peperoni" tomatsås="tomatsås" deg="deg" count={p} />)}
      </div>
    </>
  );
}


export default App
