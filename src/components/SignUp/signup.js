import React,{useState} from "react";
import SignUpBase from "./signupBase";
import SignUpOtp from "./signupOtp";
import SignUpPhone from "./signupPhone";
import SignUpEmail from "./signupEmail";
import VerifyEmail from "./verifyEmail";
import "./../../assets/css/auth.css";
const initialForm={
    verification_type:"",
    first_name:"",
    last_name:"",
    company_name:"",
    email:"",
    password:"",
    mobile_number:"",
    header_from:""
}
const SignUp=()=>{
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
            return <SignUpPhone next={next} back={back} handleFormData={handleInputData} form={form}/>;
        case 3:
            return <SignUpOtp next={next} back={back} handleFormData={handleInputData} form={form}/>;
        case 4:
            return <SignUpEmail next={next} back={back} handleFormData={handleInputData} form={form}/>;
        case 5:
                return <VerifyEmail next={next} back={back} handleFormData={handleInputData} form={form}/>
        default:
            return <SignUpBase next={next} back={back} handleFormData={handleInputData} form={form}/>;
        
    }
}
export default SignUp;