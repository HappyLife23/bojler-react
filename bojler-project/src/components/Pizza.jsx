const Pizza = (props) => {

    function handlePizza() {
        setCount()
    }

    return props.deg ? (

        <div className="pizzaGBG" style={props.style}>
            <h1 className="titel">Pizza: {props.count}</h1>
            <ul className="ul-list">
                {props.ost && <li className="li-list">{props.ost.toUpperCase()}</li>}
                {props.peperoni && <li className="li-list">{props.peperoni.toUpperCase()}</li>}
                {props.tomatsås && <li className="li-list">{props.tomatsås.toUpperCase()}</li>}
            </ul>

        </div>
    ) : (<p>Glöm inte degen</p>);
}

export default Pizza