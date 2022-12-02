
import './App.css';
import { useEffect, useState } from 'react'

function App() {
  const [price, setPrice] = useState([])
  const [currPrice, setCurrPrice] = useState([]);

  useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(res => res.json())
      .then(data => {
        setPrice(data)
        setCurrPrice(data["bpi"]["USD"]["rate"])
      })
  }, [])


  function selectHandler(event) {

    if (event.target.value === "USD") {
      setCurrPrice(price.bpi.USD.rate)
    }
    else if (event.target.value === "GBP") {
      setCurrPrice(price.bpi.GBP.rate)
    }
    else {
      setCurrPrice(price.bpi.EUR.rate)
    }
  }

  return (
    <div className="App">

      {
        price &&
        <div className='output'>
          <span className='para'>The Current price of Bitcoin: </span>
          <span className='showPrice'>{currPrice}</span>
          <select onChange={selectHandler} className="selectOption">
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      }

    </div>
  );
}

export default App;
