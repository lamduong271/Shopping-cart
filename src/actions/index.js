import * as types from "./../constants/ActionType";

export const addToCart=(product,quantity)=>{
return{
type:types.ADD_TO_CART,
product,
quantity
}
}

export const changeMessage=(message)=>{
return {
type:types.CHANGE_MESSAGE,
message
}
}

export const deleteItem=(id)=>{
return{
type:types.DELETE_ITEM,
id
}
}

export const increaseItem=(item)=>{
return{
    type:types.INCREASE_ITEM,
    item
}
}

export const decreaseItem=(item)=>{
    return{
    type:types.DECREASE_ITEM,
    item
    }
    }