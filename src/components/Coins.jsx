import React from 'react'

const Coins = ({filteredCoins})=>{


  return(
    <div className="coins">
      {filteredCoins.length === 0 && <p className="text-center bg-danger py-2">Data not found</p>}
      <table className="table">

        {/* THE SECTION OF THE TABLE HEAD */}
        <thead className="thead">
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Mktcap</th>
            <th>Pricechange</th>
            <th>Volume</th>
          </tr>
        </thead>

        {/* THE SECTION OF THE TABLE BODY */}
          <tbody className="tbody">
          {/* MAPPING THROUGH THE MOVIES STATE */}

           {filteredCoins.map((coin)=>{
             const {price_change_percentage_24h : priceChange} = coin
             return(
              <tr key={coin.id}>
                <td>{coin.name}</td>
                <td><img src={coin.image} alt="coins"/></td>
                <td className="text-uppercase">{coin.symbol}</td>
                <td>${coin.current_price}</td>
                <td>${coin.market_cap.toLocaleString()}</td>
                <td>{priceChange < 0 ? (
                  <p className="red">{priceChange.toFixed(2)}%</p>
                  ) : (
                    <p className="green">{priceChange.toFixed(2)}%</p>
                  )}
                </td>
                <td>${coin.total_volume.toLocaleString()}</td>
              </tr>
             )
           })}
        </tbody>
  
      </table>
    </div>
  )
}
export default Coins