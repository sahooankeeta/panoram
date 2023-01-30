import React,{useState} from "react";
import { Link } from "react-router-dom";
import OTPInput from "otp-input-react";
import bg5 from "./../../assets/images/bg-5.png";
import arrowRight from "./../../assets/icons/arrow-right.svg";
const SignUpOtp=({next,back,handleFormData,form})=>{
    const [OTP, setOTP] = useState("");
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
            <div className="form-heading">OTP Verification</div>
            <div className="form-subheading">Enter OTP sent to your number</div>
            <div className="auth-form-content">
            <div className="auth-form-input">
              <div className="auth-form-label">OTP</div>
              <OTPInput className="otp-input" value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false}  />
            </div>
            
            <div className="form-toggle"> 
                <span style={{color:'#D6D6D6'}}>Didn’t receive the OTP ?</span>
                <Link to="/" className="highlight">Resend</Link>
            </div>
            <button className="auth-btn btn-grey" onClick={()=>next(4)}> <span>Continue</span><img src={arrowRight} alt=""/></button>
            </div>
            
        </form>
    
</div>)
}
export default SignUpOtp;