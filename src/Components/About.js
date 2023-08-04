import React from "react"
import Navbar from "./Navbar"
import { NavLink } from "react-router-dom"
import Footer from "./Footer"

const About=()=>{

    return (
        <div >
            <Navbar/>
            <div className="about-top">
                <h1>Hiring shoudn't be so hard.</h1>
                <p>Talentdrop's mission is to be a straightforward and productive hiring solution for retail, hospitality and x businesses. It's simple: we help build pipeline, and we help screen candidates for managers. We do it with a delightful interface and AI recruiting assistant who has time to get to all the things managers and recruiters can't.
                    <br/>
                    <br/>
                    Talentdrop is female-founded, female-owned, and female-operated.
                    <br/>
                    Say hello at  
                    <strong> support@talentdrop.com</strong>
                    .
                </p>

            </div>
            <div className="about-bottom">
                <h2>The Team</h2>
                <p>After more than a decade of building teams and products at high-growth consumer tech companies like Instacart, Snapchat, and Uber, cofounders Maddy and Janelle turned their attention to building the suite of hiring tools they wished they could have used on the job.</p>
                <div className="profiles">
                    <div className="linked-in" >
                        <NavLink to={"https://www.linkedin.com/in/madeleinen/"}><img src="https://talentdrop.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fv0eku8av%2Fproduction%2F4b150b4cb7ecc23c5f779ae1375f1f9c0d86204a-500x500.jpg&w=2048&q=75" alt="profile photo"/>
                        </NavLink>
                        <a className="linked-in-profile" href={"https://www.linkedin.com/in/madeleinen/"}  target="_blank">
                            <h3>Madeleine Nguyen</h3>
                            <span>in</span>
                        </a>
                        <p className="position">Co-Founder / CEO</p>
                        <p className="intro">Hi! I'm originally from the SF Bay Area. I went to Georgetown University in DC for undergrad where I played Women's Golf and studied Classics. I then went to law school at Washington University in St. Louis where I became interested in employment law, which led me to explore careers in HR and Talent. I wanted to get into tech so I pursued opportunities in recruiting, starting at a firm (Riviera) then going in house to Instacart, Snapchat, and Uber between 2013-2019. I left to start Talentdrop!</p>
                    </div>
                    <div className="linked-in">
                    <NavLink to={"https://www.linkedin.com/in/janelletiulentino/"}> <img src="https://talentdrop.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fv0eku8av%2Fproduction%2F2f5e353df7a99e8007f722c368cbe401f451c9f6-320x320.jpg&w=1200&q=75" alt="profile photo"/>
                    </NavLink>
                        <a href="https://www.linkedin.com/in/janelletiulentino/" target="_blank" className="linked-in-profile">
                            <h3>Janelle Tiulentino</h3>
                            <span>in</span>
                            </a>
                        <p className="position">Co-Founder / CTO</p>
                        <p className="intro">I have the taste buds of a five-year-old, and I'm living proof that a self-professed dog person can indeed become a cat person. 🙋🏻‍♀️</p>
                    </div>
                    <div className="linked-in">
                    <NavLink to={"https://www.linkedin.com/in/adeola-j-adeyemo/"}> <img src="https://talentdrop.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fv0eku8av%2Fproduction%2Fc2a5de4dbea3ef70acc26df06d65ecbb6adf0d32-1829x1826.png&w=2048&q=75" alt="profile photo"/> 
                    </NavLink>
                        <a href="https://www.linkedin.com/in/adeola-j-adeyemo/" target="_blank" className="linked-in-profile">
                            <h3>Adeola Adeyemo</h3>
                            <span>in</span>
                        </a>
                        <p className="position">Founding Engineer</p>
                        <p className="intro">Joined a team of friends to build a startup in the University, and learning to write code stuck with me ever since. I enjoy listening to podcasts, reading short articles, and the depth of stories in anime. Fun fact, I also create digital art and comics (learned to draw in 2019).</p>
                    </div>
                </div>
                <div className="customers">
                    <h3>Trusted by</h3>
                    <div className="customers-logo">
                        <img src="https://talentdrop.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fv0eku8av%2Fproduction%2Fb9390dd819c573b8fae6f3d0bb0d61865f484eee-342x212.png&w=1200&q=75" alt="superRare's logo"/>
                        <img src="https://talentdrop.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fv0eku8av%2Fproduction%2F682670e0ce27e8e3eef001dc87165288ca4f52df-256x256.png&w=2048&q=75" alt="phantom's logo"/>
                        <img src="https://talentdrop.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fv0eku8av%2Fproduction%2F2dee3f2dc42053ebf116f278a8401c66835e5946-257x257.png&w=1200&q=75" alt="YC's logo"/>
                        <img src="https://talentdrop.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fv0eku8av%2Fproduction%2F51eaf53bd9512a11ade2cb01ed84f2f2fd6d9c09-282x299.png&w=2048&q=75" alt="Uniswap's logo"/>
                        <img src="https://talentdrop.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fv0eku8av%2Fproduction%2F98e96b422bce90e5f97ac19238015691fcdb69ef-238x257.png&w=1920&q=75" alt="Whatnot's logo"/>
                        <img src="https://talentdrop.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fv0eku8av%2Fproduction%2F1bf70c8c219b1c874c5e442467939089dc42abb8-452x234.png&w=3840&q=75" alt="Shef's logo"/>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    )
}


export default About