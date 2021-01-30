import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Coins from './components/Coins'
// import Search from './components/Search'
import './App.css';


// 

function App() {
const [coins, setCoins] = useState([]);
const [search, setSearch] = useState('')

  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res=>{
      setCoins(res.data)
    })
    .catch((error)=>{
        console.log(error);
    })
  }, [])


  const handleChange = e =>{
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin=>
      coin.name.toLowerCase().includes(search.toLocaleLowerCase())
    )

    

  return (
    <div className="contain">
      <div className="coin-search">
          <h1>CRYPTOCURRENCY TRACKER</h1>
          <form>
              <input type="text" placeholder="search" className="coin-input" onChange={handleChange}/>
          </form>
      </div>

      <div className="container">
          <Coins filteredCoins={filteredCoins}/>
      </div>
    </div>
  );
}

export default App;
