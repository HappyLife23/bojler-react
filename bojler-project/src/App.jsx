import Pizza from "./components/Pizza"
import Button from "./components/Button"



import { useEffect, useState } from "react"

function App() {
  const [count, setCount] = useState(1)
  const [pizza, setPizza] = useState([])
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    setRotation(prev => prev + 360)


  }, [count])

  function addPizza() {
    setPizza([...pizza, count])
  }



  return (
    <>

      <Button onClick={addPizza} count={count} setCount={setCount} />

      <div className="pizza-container" >
        {pizza.map((p) => <Pizza style={{ transform: `rotate(${rotation}deg)` }} key={p} ost="ost" peperoni="peperoni" tomatsås="tomatsås" deg="deg" count={p} />)}
      </div >
    </>
  );
}


export default App
