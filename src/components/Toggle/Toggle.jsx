import "./Toggle.css"
import Sun from "../../img/t1.png"
import Moon from "../../img/e1.png"
import { ThemeContext } from "../../Context"
import { useContext } from "react"

const Toggle = () => {
    const theme = useContext(ThemeContext)

    const handleClick = () => {
        theme.dispatch({type:"TOGGLE"})
    }
    return (
        <div className="t">
            <img src={Sun} alt="" className="t-icon" />
            <img src={Moon} alt="" className="t-icon" />
            <div className="t-button" 
            onClick={handleClick} 
            style={{left: theme.state.darkMode ? 0 : 25, transitionDelay: 2}}
            >

            </div>
        </div>
    )
}

export default Toggle