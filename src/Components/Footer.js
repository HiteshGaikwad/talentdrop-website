import React from "react"
import "../Footer.css"
import { NavLink, useNavigate } from "react-router-dom"
import TermsConditions from "./TermsConditions"
import Privacy from "./Privacy"
import { Navigate } from "react-router-dom"


const Footer= ()=>{

    let navigate= useNavigate();


    return (
        <div>
            <hr className="line"/>
            <div className="footer">
                <div className="footer-left">
                    <p>© 2023  Talentdrop. All rights reserved.</p>
                    {/* <NavLink className={"footer-about"} to={"/about"} target={"_parent"}>About</NavLink>
                    <NavLink className={"footer-terms"} to={"/termsConditions"} target="_parent">Terms & Conditions</NavLink>
                    <NavLink className={"footer-privacy"} to={"/privacy"}target="_parent">Privacy Policy</NavLink> */}
                    <button  className={"footer-about"} onClick={()=>navigate("/about")} >About</button>
                    <button className={"footer-terms"} onClick={()=>navigate("/termsConditions")} >Terms & Conditions</button>
                    <button className={"footer-privacy"} onClick={()=>navigate("/privacy")} >Privacy Policy</button>
                </div>
                <div className="footer-right">
                <NavLink to={"https://twitter.com/i/flow/login?redirect_after_login=%2FTalentdrop_Inc"} target={"_blank"}>
                    <img className="twitter" src={require("../Images/twitter.jpg")} alt="twitter's logo"/>
                </NavLink>
                    <NavLink to={"https://www.instagram.com/talentdropinc/"} target="_blank">
                        <img className="facebook" src={require("../Images/facebook 1.png")} alt="facebook's logo"/>
                    </NavLink>
                    <NavLink  to={"https://www.linkedin.com/company/talentdrop/"} target="_blank">
                        <img className="linkedin" src={require("../Images/linkedin.png")} alt="linkedin's logo"/>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Footer;