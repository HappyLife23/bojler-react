
import Pizza from "./Pizza"

const Button = ({count, setCount, onClick}) => {

    return (
        <button className="btn" onClick={() => {
          
            setCount((prevStat) => prevStat + 1)
            onClick()

        }}>Baka en pizza</button>
    );
}

export default Button


// [...pizza, <Pizza ost="ost" peperoni="peperoni" tomatsås="tomatsås" deg="deg" count={count} />]