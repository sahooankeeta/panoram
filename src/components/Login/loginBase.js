import React,{useState} from "react";
import { Link } from "react-router-dom";
import * as validate from "./../../helpers/validation";
import bg1 from "./../../assets/images/bg-1.jpg";
import arrowRight from "./../../assets/icons/arrow-right.svg";

const LoginBase=({next,back,handleFormData,form})=>{
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(form)
        if(form.verification_type!=="")
        {
            next(2);
        }
    }
    const detectLoginType=(e)=>{
        const val=e.target.value;
    if(validate.validateEmail(val))
       {
        handleFormData("email",val)
        handleFormData("verification_type","email")
       }
    else if(validate.validateMobile(val))
       {
        handleFormData("mobile_no",val)
        handleFormData("verification_type","otp")
       }
    else
       handleFormData("verification_type","")
    }
    return (<div className="auth-page">
        <div className="auth-background">
            <div className="auth-overlay">
            <div className="auth-content">
                <div className="overlay-highlight">JOIN MEDIUM</div>
                <div className="overlay-text">ARCHITECTURE +<br/>INTERIOR DESIGN</div>
                </div>
            </div>
            <img src={bg1} alt=""/>
        </div>
        
            <form className="auth-form">
                <div className="form-heading">Welcome Back !</div>
                <div className="form-subheading">Login to your account</div>
                <div className="auth-form-content">
                <div className="auth-form-input">
                  <div className="auth-form-label">Email address/Phone number</div>
                  <input placeholder="Placeholder" onChange={detectLoginType}/>
                </div>
                <div className="form-toggle"> 
                    <span style={{color:'#D6D6D6'}}>Don’t have an account?</span>
                    <Link to="/sign-up" className="highlight">Sign up</Link>
                </div>
                <button className="auth-btn btn-grey" onClick={handleSubmit}> <span>Log In</span><img src={arrowRight} alt=""/></button>
                </div>
            </form>
        
    </div>)
}
export default LoginBase;