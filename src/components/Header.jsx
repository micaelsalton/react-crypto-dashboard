import { useContext, useState } from "react";
import { Context } from "../Context";

function Header() {

    const {setImgTheme} = useContext(Context)
    const [theme, setTheme] = useState("")

    return (
      <div className="header">
        <h1>DashBoard Pessoal</h1>
        <input 
            type="text" 
            placeholder="Busque novas imagens"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}/>
        <button onClick={()=> setImgTheme(theme)}>buscar</button>
      </div>
    )
  }
  
  export default Header