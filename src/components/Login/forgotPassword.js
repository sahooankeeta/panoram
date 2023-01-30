import React,{useState} from "react";
import { Link } from "react-router-dom";
import bg5 from "./../../assets/images/bg-5.png";
import arrowRight from "./../../assets/icons/arrow-right.svg";
import infoSuccess from "./../../assets/icons/info-success.svg";
import { useDispatch,useSelector } from "react-redux";
import { sendResetEmail } from "../../actions";
const ForgotPassword=({back})=>{
    const dispatch=useDispatch();
    const [form,setForm]=useState({email:""});
    const sentResetEmail=useSelector(state=>state.sentResetEmail)
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(sendResetEmail(form))
    }
    console.log(sentResetEmail)
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
                <div className="form-heading">Forgot Your Password?</div>
                <div className="form-subheading">Enter your email address below and we’ll send you password reset instructions.</div>
                <div className="auth-form-content">
                <div className="auth-form-input">
                  <div className="auth-form-label">Email address</div>
                  <input type="email" placeholder="Placeholder" onChange={(e)=>{setForm({...form,"email":e.target.value})}}/>
                </div>
                <button className={`auth-btn btn-${sentResetEmail?"green":"grey"}`} onClick={handleSubmit}> <span>Email me reset instructions</span><img src={arrowRight} alt=""/></button>
                {!sentResetEmail &&
                <div className="forgot-undo" onClick={()=>back(2)}>Never mind, go back</div>
                }
                </div>
                {sentResetEmail && <div className="auth-notofication-success">
                     <img src={infoSuccess} alt=""/>
                  <span>Check your email for reset instructions</span>
                 </div>}
                
            </form>
        
    </div>)
}
export default ForgotPassword;