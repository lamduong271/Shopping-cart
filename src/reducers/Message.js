import * as types from "./../constants/ActionType";

var initialState="YOUR CART IS NOW EMPTY";
const Message=(state=initialState,action)=>{
switch(action.type){
    case types.CHANGE_MESSAGE:
    console.log(action);
    state=action.message;
    return state;
    default:
    return state;
}
}
export default Message;