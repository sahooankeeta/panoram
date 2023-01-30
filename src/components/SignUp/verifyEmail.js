import React from "react";
import { Link } from "react-router-dom";
import bg6 from "./../../assets/images/bg-6.png";
import arrowRight from "./../../assets/icons/arrow-right.svg";
const VerifyEmail=({next,back,handleFormData,form})=>{
    return (<div className="auth-page">
    <div className="auth-background">
        <div className="auth-overlay">
        <div className="auth-content">
            <div className="overlay-highlight">JOIN MEDIUM</div>
            <div className="overlay-text">ARCHITECTURE +<br/>INTERIOR DESIGN</div>
            </div>
        </div>
        <img src={bg6} alt=""/>
    </div>
    
        <form className="auth-form">
            <div className="form-heading">Welcome To Panoram CGI</div>
            <div className="form-subheading">Create your account</div>
            <div className="auth-form-input">
              <div className="auth-form-label">Email address</div>
              <input placeholder="Placeholder"/>
            </div>
            <div className="auth-form-input">
              <div className="auth-form-label">Password</div>
              <input placeholder="Placeholder"/>
            </div>
            
            <button className="auth-btn btn-grey" onClick={()=>next(2)}> <span>Continue</span><img src={arrowRight} alt=""/></button>
        </form>
    
</div>)
}
export default VerifyEmail;