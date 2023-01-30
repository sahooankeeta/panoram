import * as actionType from "./../helpers/constants";

const initialState = {
  sentResetEmail:false
};
const reducer = (state = initialState, action) => {
  switch (action.type) 
  {
    case actionType.SENT_RESET_EMAIL: 
      return { ...state, sentResetEmail:action.payload};
    
    default:
      return state;
  }
}
export default reducer;