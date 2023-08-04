import React from  "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { NavLink } from "react-router-dom"
import "../Terms.css"


const Privacy= ()=>{

    return(
        <div>
            <Navbar/>
            <div className="privacy-body">
                <h1>Privacy Policy</h1>
                <h3>Effective June 1, 2021</h3>
                <p>At TalentDrop, we take your privacy seriously. Please read this Privacy Policy to learn how we treat your personal data. <b>By using or accessing our Services in any manner, you acknowledge that you accept the practices and policies outlined below, and you hereby consent that we will collect, use and share your information as described in this Privacy Policy.</b></p>
                <p>Remember that your use of TalentDrop's Services is at all times subject to our <NavLink className="privacy-link" target="_blank" to={"/termsConditions"}> Terms of Use</NavLink>, which incorporates this Privacy Policy. Any terms we use in this Policy without defining them have the definitions given to them in the Terms of Use.</p>
                <p>If you have a disability, you may access this Privacy Policy in an alternative format by contacting <a className="privacy-link" href="mailto:support@talentdrop.com">support@talentdrop.com.</a></p>
                <h3> What this Privacy Policy Covers</h3>
               <p>This Privacy Policy covers how we treat Personal Data that we gather when you access or use our Services. “Personal Data” means any information that identifies or relates to a particular individual and also includes information referred to as “personally identifiable information” or “personal information” under applicable data privacy laws, rules or regulations. This Privacy Policy does not cover the practices of companies we don't own or control or people we don't manage.</p>
               <h3> Personal Data</h3>
              <h4>Categories of Sources of Personal Data</h4>
              <p>We collect Personal Data about you from the following categories of sources:</p>
              <h4>You:</h4>
              <ul>
                <li>When you provide such information directly to us.</li>
                <li>When you create an account or use our interactive tools and Services.</li>
                <li>When you voluntarily provide information in free-form text boxes through the Services or through responses to surveys or questionnaires.</li>
                <li>When you send us an email or otherwise contact us.</li>
                <li>When you use the Services and such information is collected automatically.</li>
                <li>Through Cookies (defined in the “Tracking Tools, Advertising and Opt-Out” section below).</li>
                <li>If you use a location-enabled browser, we may receive information about your location.</li>
                <li>If you download and install certain applications and software we make available, we may receive and collect information transmitted from your computing device for the purpose of providing you the relevant Services, such as information regarding when you are logged on and available to receive updates or alert notices.</li>
              </ul>
              <h4>Public Records:</h4>
              <p>From the government or other sources, including public social media posts.</p>
              <h4>Third Parties:</h4>
              <ol>
                <li>Referrers</li>
                <li>We receive information from referrers who think you may be good match for a company on our Services.</li>
                <li>Vendors</li>
                <li>We may use analytics providers to analyze how you interact and engage with the Services, or third parties may help us provide you with customer support.</li>
                <li>We may use vendors to obtain information to generate leads and create user profiles.</li>
                <li>Advertising Partners</li>
                <li>We receive information about you from some of our vendors who assist us with marketing or promotional services related to how you interact with our websites, </li>
                <li>applications, products, Services, advertisements or communications.</li>
                <li>Social Networks</li>
                <li>If you provide your social network account credentials to us or otherwise sign in to the Services through a third-party site or service, some content and/or information in those accounts may be transmitted into your account with us.</li>
              </ol>
              <h3>Personal Data of Children</h3>
              <p>As noted in the Terms of Use, we do not knowingly collect or solicit Personal Data about children under 16 years of age; if you are a child under the age of 16, please do not attempt to register for or otherwise use the Services or send us any Personal Data. If we learn we have collected Personal Data from a child under 16 years of age, we will delete that information as quickly as possible. If you believe that a child under 16 years of age may have provided Personal Data to us, please contact us at<a className="privacy-link" href="mailto:support@talentdrop.com">support@talentdrop.com</a>.</p>
              <h3>State Law Privacy Rights</h3>
              <h4>California Resident Rights</h4>
              <p>Under California Civil Code Sections 1798.83-1798.84, California residents are entitled to contact us to prevent disclosure of Personal Data to third parties for such third parties' direct marketing purposes; in order to submit such a request, please contact us at <a className="privacy-link" href="mailto:support@talentdrop.com">support@talentdrop.com</a>.</p>
              <h4>Nevada Resident Rights</h4>
              <p>If you are a resident of Nevada, you have the right to opt-out of the sale of certain Personal Data to third parties who intend to license or sell that Personal Data. You can exercise this right by contacting us at <a className="privacy-link" href="mailto:support@talentdrop.com">support@talentdrop.com</a> with the subject line “Nevada Do Not Sell Request” and providing us with your name and the email address associated with your account. We will not and do not sell your Personal Data.</p>
              <h3>European Union Data Subject Rights</h3>
              <p>If you are a resident of the European Union (“EU”), United Kingdom, Lichtenstein, Norway or Iceland, you may have additional rights under the EU General Data Protection Regulation (the “GDPR”) with respect to your Personal Data, as outlined below.</p>
              <p>For this section, we use the terms “Personal Data” and “processing” as they are defined in the GDPR, but “Personal Data” generally means information that can be used to individually identify a person, and “processing” generally covers actions that can be performed in connection with data such as collection, use, storage and disclosure. TalentDrop will be the controller of your Personal Data processed in connection with the Services.</p>
              <p>If there are any conflicts between this this section and any other provision of this Privacy Policy, the policy or portion that is more protective of Personal Data shall control to the extent of such conflict. If you have any questions about this section or whether any of the following applies to you, please contact us at <a className="privacy-link" href="mailto:support@talentdrop.com">support@talentdrop.com</a>.</p>
              <h3>Changes to this Privacy Policy</h3>
              <p>We're constantly trying to improve our Services, so we may need to change this Privacy Policy from time to time, but we will alert you to any such changes by placing a notice on the TalentDrop website, by sending you an email and/or by some other means. Please note that if you've opted not to receive legal notice emails from us (or you haven't provided us with your email address), those legal notices will still govern your use of the Services, and you are still responsible for reading and understanding them. If you use the Services after any changes to the Privacy Policy have been posted, that means you agree to all of the changes. Use of information we collect is subject to the Privacy Policy in effect at the time such information is collected.</p>

            </div>
            <Footer/>
        </div>
    )
}

export default Privacy;