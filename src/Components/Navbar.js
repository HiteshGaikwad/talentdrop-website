import React,{ useState} from "react"
import { useNavigate } from "react-router-dom"


const Navbar= ()=>{

    const navigate= useNavigate();

    const [isActive, setIsActive]= useState(false);

    const toggleActive= ()=>{
        setIsActive(!isActive);
    }
    
    return (
        <div className="navbar">
                <div className="navbar-left" onClick={()=>navigate("/")}>
                    <img src="https://talentdrop.com/_next/static/media/logo-white.a9c6c41f.svg" alt="logo"/>
                    <p>TALENTDROP</p>
                </div>

                <div className="navbar-right">
                <button onClick={toggleActive} id="clicked-menu" className={`menu-btn ${isActive ? 'close' : 'active'}`}>
                    <img src="https://talentdrop.com/_next/static/media/menu-icon.cbcd2e64.svg" alt="menu button"/>
                    </button>
                    <div id="white-bg-id" className={`white-bg ${isActive ? 'active' : 'close'}`}>
                        
                    <div className="menu">
                    <button onClick={()=>navigate("/about")} className="menu-about">About</button>

                    <button  onClick={()=>navigate("/login")} 
                    className="menu-sign-in-btn">Sign In</button>

                    <button  onClick={()=>navigate("/signup")} 
                    className="menu-sign-up-btn">Sign Up</button>
                    </div>

                    <button onClick={toggleActive} className={`cross-btn ${isActive ? 'active' : 'close'}`}>
                        <img src={require("../Images/1024px-Multiplication_Sign.svg.png")} alt="cross button"/>
                    </button>
                </div>
                <div className="menu-btn-options">
                <button onClick={()=>navigate("/about")} className="about">About</button>

                <button  onClick={()=>navigate("/login")} className="sign-in-btn">Sign In</button>

                <button  onClick={()=>navigate("/signup")} className="sign-up-btn">Sign Up</button>

                </div>
                </div>
            
        </div>
    )
}

export default Navbar;