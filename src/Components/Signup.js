import React from "react"
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 
import "../Sign.css"

const Signup= ()=>{

    let navigate= useNavigate();

    return(
        <div className="signin-page">
            <div className="signin-left">
                <NavLink to={"/"}><img className="website-logo" src="https://talentdrop.com/_next/static/media/logo.da4b42f9.svg" alt="website's logo"/></NavLink>
                <h2>Build a pipeline of great talent.</h2>
                <p>Create your own profile to expand your hiring reach, easily.</p>
                <img className="insta-image" src="https://talentdrop.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fauth-hero.c4bbd6b3.png&w=1080&q=75" alt="insta image"/>
            </div>
            <div className="signin-right">
                <div className="btn">
                <button onClick={()=>navigate("/login")}>Lon in</button>
                <button onClick={()=>navigate("/signup")}>Create an account</button>
                </div>
                <button className="google-signin">
                        <img className="google" src="https://talentdrop.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoogle.f99004c5.png&w=64&q=75" alt="goole logo"/>
                        Continue with Google
                    </button>
                        <p className="or">----OR----</p>
                
                <div className="email">
                    <label id="email">Email</label>
                    <input className="email" type="email" placeholder="Enter your email" required/>
                </div>
                <div className="email">
                    <div className="label-forget"><label id="password">Password</label>
                    <NavLink className="forget">Forget?</NavLink>
                    </div>
                    <input className="password" type="password" placeholder="Enter a password"/>
                </div   >
                <button className="login-btn">Sign up</button>
                <p className="new-acc">Already have an account? <NavLink className="Signin-nav" to={"/login"}>Log in</NavLink></p>
            </div>
        </div>
    )
}

export default Signup;