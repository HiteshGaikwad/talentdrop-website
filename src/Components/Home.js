import React from "react"
import {IoMdArrowForward} from "react-icons/io"
import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom"




const Home= ()=>{

    let navigate= useNavigate();

    return (
        <div>
            <Navbar/>
        <div className="home">
            <div className="home-left">
                <p className="heading">Recruiting, Evolved</p>
                <p className="para">Combine the power of collaborative hiring with Al automation to find, screen, and hire the best candidates. Talentdrop works for...  </p>
                <div className="navlink">
                    <p className="icon-para">Small Business Owners <span className="arrow"><IoMdArrowForward/></span>  </p>
                    <p className="icon-para">Properties <span className="arrow"><IoMdArrowForward/></span></p>
                    <p className="icon-para">Individual Hiring Managers <span className="arrow"><IoMdArrowForward/></span></p>
                </div>
                <div className="google-btn">
                    <button>
                        <img src="https://talentdrop.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoogle.f99004c5.png&w=64&q=75" alt="goole logo"/>
                        Continue with Google
                    </button>
                    <p onClick={()=>navigate("/signup")}>Or sign up</p>
                </div>
            </div>
            <div className="home-right">
            <img src="https://cdn.sanity.io/images/v0eku8av/production/ae812ce174315b2b771c1a8738faf0bacbe7738c-2912x1818.png?w=3840&q=75&fit=clip&auto=format" alt="demo image"/>
            </div>
           
        </div>
        </div>
    )
}

export default Home;