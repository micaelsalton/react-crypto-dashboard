import { useState } from "react";
import { useContext } from "react";
import { Context } from "../Context";

function Crypto(){

    const {setSelectedCrypto, selectedCrypto, cryptoData, loading} = useContext(Context)


    function getIcon(){
        return selectedCrypto === "bitcoin" ? "fab fa-btc" : "	fab fa-ethereum"
    }

    const price = Number(cryptoData.priceUsd).toFixed(2)
    

    return (
        <div className="crypto-container">
          {loading ? <><i class="fa fa-spinner fa-spin animated"></i><h3>carregando...</h3></>
          : 
      <>
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
            <span className="data-label">Preço:</span> {price} USD
          </li>
        </ul>
        </>
        }  
      </div>
      )
}

export default Crypto