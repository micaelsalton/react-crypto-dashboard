import { useContext } from "react";
import { Context } from "../Context";

function Crypto(){

    const {setSelectedCrypto, selectedCrypto, cryptoData} = useContext(Context)

    function getIcon(){
        return selectedCrypto === "bitcoin" ? "fab fa-btc" : "	fab fa-ethereum"
    }

    let price = Number(cryptoData.priceUsd).toFixed(2)
    

    return (
        <div className="crypto-container">
        <h1 className="title">
          {cryptoData.name} <i className={`${getIcon()}`}></i>
        </h1>
        <select
          value={selectedCrypto}
          onChange={e => setSelectedCrypto(e.target.value)}
          className="select"
        >
          <option value="bitcoin">Bitcoin</option>
          <option value="ethereum">Ethereum</option>
        </select>
        <ul className="data-list">
          <li className="data-item">
            <span className="data-label">Symbol:</span> {cryptoData.symbol}
          </li>
          <li className="data-item">
            <span className="data-label">Price:</span> {price} USD
          </li>
        </ul>
      </div>
      )
}

export default Crypto