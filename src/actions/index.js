import * as actionType from "./../helpers/constants";
export const sendResetEmail=(data)=>(dispatch)=>{
 try{
   console.log(data);
   dispatch({type:actionType.SENT_RESET_EMAIL,payload:true});
 }catch(error){
    console.log(error);
 }
}