
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
    }

    fetchData()
  }, [selectedCrypto])

  //end of crypto section----/////////
  //start of hero section----/////////

  const [image, setImage] = useState(null)
  const [imgTheme, setImgTheme] = useState("nature")
/*
  useEffect(() => {
    const fetchImage = async () => {
      const response = await axios.get(`https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=${imgTheme}`)
      setImage(response.data.urls.regular)
      console.log(response.data.urls.regular)
    };
  
    fetchImage()
  }, [imgTheme])

  */


    return (
        <Context.Provider 
        value={{setSelectedCrypto, 
                selectedCrypto,
                image,
                setImgTheme,
                cryptoData}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}