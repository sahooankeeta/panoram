import React from "react";
import bg2 from "./../../assets/images/bg-2.png";
import arrowRight from "./../../assets/icons/arrow-right.svg";
const LoginOtpPassword=({next,back,handleFormData,form})=>{
    const handleCredentials=(e)=>{
      if(form.verification_type==='email')
         handleFormData("password",e.target.value);
      else
        handleFormData("otp",e.target.value);
    }
    const handleSubmit=(e)=>{
       e.preventDefault();
       console.log(form)
    }
    return (<div className="auth-page">
        <div className="auth-background">
            <div className="auth-overlay">
                <div className="auth-content">
                <div className="overlay-highlight">Join medium</div>
                <div className="overlay-text">ARCHITECTURE +<br/>INTERIOR DESIGN</div>
                </div>
            </div>
            <img src={bg2} alt=""/>
        </div>
        
            <form className="auth-form">
                <div className="form-heading">Welcome Back !</div>
                <div className="form-subheading">Login to your account</div>
                <div className="auth-form-content">
                <div className="auth-form-input">
                  <div className="auth-form-label">Enter {form.verification_type==='email'?'password':'OTP'}</div>
                  <input placeholder="Placeholder" onChange={handleCredentials}/>
                </div>
                <button className="auth-btn btn-grey" onClick={handleSubmit}> <span>Log In</span><img src={arrowRight} alt=""/></button>
                <div className="highlight" style={{alignSelf:'flex-end'}} onClick={()=>next(3)}>Forgot password ?</div>
                </div>
                
            </form>
        
    </div>)
}
export default LoginOtpPassword;