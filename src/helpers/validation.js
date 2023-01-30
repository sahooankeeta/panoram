export const validateEmail=(email)=>{
    return (email.length!==0 && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email));
}
export const validateMobile=(mobile)=>{
    return (mobile.length===10 && /[0-9]{10}/i.test(mobile))
}
export const validateEmpty=(input)=> (input.length===0);