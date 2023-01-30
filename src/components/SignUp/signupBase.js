import React from "react";
import { Link } from "react-router-dom";
import bg5 from "./../../assets/images/bg-5.png";
import arrowRight from "./../../assets/icons/arrow-right.svg";
const SignUpBase=({next,back,handleFormData,form})=>{
    return (<div className="auth-page">
        <div className="auth-background">
            <div className="auth-overlay">
            <div className="auth-content">
                <div className="overlay-highlight">JOIN MEDIUM</div>
                <div className="overlay-text">ARCHITECTURE +<br/>INTERIOR DESIGN</div>
                </div>
            </div>
            <img src={bg5} alt=""/>
        </div>
        
            <form className="auth-form">
                <div className="form-heading">Welcome To Panoram CGI</div>
                <div className="form-subheading">Create your account</div>
                <div className="auth-form-content">
                <div className="auth-form-input">
                  <div className="auth-form-label" onChange={(e)=>handleFormData("first_name",e.target.value)}>First name</div>
                  <input placeholder="Placeholder"/>
                </div>
                <div className="auth-form-input">
                  <div className="auth-form-label">Last name</div>
                  <input placeholder="Placeholder" onChange={(e)=>handleFormData("last_name",e.target.value)}/>
                </div>
                <div className="auth-form-input">
                  <div className="auth-form-label">Company name</div>
                  <input placeholder="Placeholder" onChange={(e)=>handleFormData("company_name",e.target.value)}/>
                </div>
                <div className="form-toggle"> 
                 
                    <span style={{color:'#D6D6D6'}}>Already have an account ?</span>
                    <Link to="/" className="highlight">Log In</Link>
                </div>
                <button className="auth-btn btn-grey" onClick={()=>next(2)}> <span>Continue</span><img src={arrowRight} alt=""/></button>
                </div>
            </form>
        
    </div>)
}
export default SignUpBase;