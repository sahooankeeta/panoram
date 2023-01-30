import React from "react";
import { Link } from "react-router-dom";
import bg3 from "./../../assets/images/bg-3.png";
import phoneDown from "./../../assets/icons/phone-down.svg"
import arrowRight from "./../../assets/icons/arrow-right.svg";
const SignUpPhone=({next,back,handleFormData,form})=>{
    return (<div className="auth-page">
        <div className="auth-background">
            <div className="auth-overlay">
            <div className="auth-content">
                <div className="overlay-highlight">JOIN MEDIUM</div>
                <div className="overlay-text">ARCHITECTURE +<br/>INTERIOR DESIGN</div>
                </div>
            </div>
            <img src={bg3} alt=""/>
        </div>
        
            <form className="auth-form">
                <div className="auth-skip" onClick={()=>next(4)}>Skip</div>
                <div className="form-heading">Welcome To Panoram CGI</div>
                <div className="form-subheading">Create your account</div>
                <div className="auth-form-content">
                <div className="auth-form-input">
                <div className="auth-form-label">Phone number</div>
                <div className="phone-box">
                    <div className="phone-code">
                        <span>91</span>
                        <img src={phoneDown} alt=""/>
                    </div>
                  
                  <input placeholder="Placeholder" onChange={(e)=>handleFormData("mobile_number",e.target.value)}/>
                </div>
                </div>
                <div className="auth-form-input">
                  <div className="auth-form-label">How did you hear about us?</div>
                  <input placeholder="Placeholder"/>
                </div>
                <button className="auth-btn btn-grey" onClick={()=>next(3)}> <span>Continue</span><img src={arrowRight} alt=""/></button>
                </div>
            </form>
        
    </div>
    )
}
export default SignUpPhone;