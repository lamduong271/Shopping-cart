import * as types from "./../constants/ActionType";

var data=JSON.parse(localStorage.getItem("cart"));
var initialState=data?data:[];
const cart =(state=initialState,action)=>{
    
    var {product,quantity}=action;
switch(action.type){
    case types.ADD_TO_CART:
    var productFind=findProduct(product.id,state);
    if(productFind!==-1){
        state[productFind].quantity+=1;
    }
    else{
        
        state.push({
            product:product,
            quantity:quantity
        });
    }
    
    
    localStorage.setItem("cart",JSON.stringify(state));
        return [...state];

    case types.DELETE_ITEM:
    var delItem=findProduct(action.id,state);
    if(delItem!==-1){
        state.splice(delItem,1)
    }
    localStorage.setItem("cart",JSON.stringify(state));
    return [...state];

    case types.INCREASE_ITEM:
    var findItemToIncrease=findProduct(action.item.product.id,state);
    if(findItemToIncrease!==-1){
        state[findItemToIncrease].quantity+=1;
    }
    localStorage.setItem("cart",JSON.stringify(state));
    return [...state];

    case types.DECREASE_ITEM:
    var findItemToDecrease=findProduct(action.item.product.id,state);
    if(findItemToDecrease!==-1 && state[findItemToDecrease].quantity>0){
        state[findItemToDecrease].quantity-=1;
    }
    if(state[findItemToDecrease].quantity===0){
        state.splice(delItem,1)
    }
    localStorage.setItem("cart",JSON.stringify(state));
    return [...state];
    default:
        return [...state];
}
}
var findProduct=(id,cart)=>{
 var result=-1;
 if(cart.length>0){
    for(var i=0;i<cart.length;i++){
        if(cart[i].product.id===id){
            result=i;
            break;
        }
    }
 }
 return result;
}
export default cart;