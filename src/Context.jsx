
import React, {useState, useEffect, createContext} from "react"
import axios from "axios"

const Context = createContext()

function ContextProvider({children}){

//Crypto section ------------///////
  const [cryptoData, setCryptoData] = useState([])
  const [selectedCrypto, setSelectedCrypto] = useState('bitcoin')

  useEffect(() => {
   
    const fetchData = async () => {
      const result = await axios(
        `https://api.coincap.io/v2/assets/${selectedCrypto}`
      )

      setCryptoData(result.data.data)
      console.log(cryptoData)
    }

    fetchData()
  }, [selectedCrypto])

  //end of crypto section----/////////


    return (
        <Context.Provider 
        value={{setSelectedCrypto, 
                selectedCrypto,
                cryptoData}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}