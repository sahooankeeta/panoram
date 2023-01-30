import React,{useState} from "react";
import LoginBase from "./loginBase";
import LoginOtpPassword from "./loginOtpPassword";
import ForgotPassword from "./forgotPassword";
import "./../../assets/css/auth.css";
const initialForm={
    verification_type:"",
    email:"",
    password:"",
    mobile_no:"",
    otp:""
}
const Login=()=>{
    const [step,setStep]=useState(1);
    const [form,setForm]=useState(initialForm);
    const next=(val)=>{
        setStep(val);
    }
    const back=(val)=>{
        setStep(val);
    }
    const handleInputData =(input,value)=> {
        setForm(prevState => ({
          ...prevState,
          [input]: value
      }));
      }
      
    switch(step)
    {
        case 2:
            return <LoginOtpPassword next={next} back={back} handleFormData={handleInputData} form={form}/>;
        case 3:
            return <ForgotPassword back={back}/>
        default:
            return <LoginBase next={next} back={back} handleFormData={handleInputData} form={form}/>;
        
    }
}
export default Login;