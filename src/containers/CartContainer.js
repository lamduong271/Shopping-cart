import React, { Component } from 'react';
import Cart from "./../components/Cart";
import CartItem from "./../components/CartItem";
import CartResult from "./../components/CartResult";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import * as actions from "./../actions/index";
class CartContainer extends Component{
renderCartResult=(cart)=>{
var result=null;
if(cart.length>0){
    result=<CartResult cart={cart}/>
}
return result;
}
listCartItem=(item)=>{
var result=<tr>
    <td>your cart is empty</td>
</tr>;
if(item.length>0){
    result=item.map((item,index)=>{
        return <CartItem key={index} item={item} deleteItem={this.props.deleteItem} changeMessage={this.props.changeMessage} increaseItem={this.props.increaseItem} decreaseItem={this.props.decreaseItem}/>
    })
}
return result;
}
render(){
    var {cart}=this.props;
    return(
        <Cart>
        {this.listCartItem(cart)}
        {this.renderCartResult(cart)}
        </Cart>
    )
       
    
}
}

CartContainer.propTypes={
    cart:PropTypes.arrayOf(PropTypes.shape({
            product:PropTypes.shape({
                    id:PropTypes.number.isRequired,
                    name:PropTypes.string.isRequired,
                    img:PropTypes.string.isRequired,            
                    description:PropTypes.string.isRequired,
                    price:PropTypes.number.isRequired,
                    inventory:PropTypes.number.isRequired,
                    rating:PropTypes.number.isRequired
            }).isRequired,
            quantity:PropTypes.number.isRequired
        })).isRequired
    
}

const mapStateToProp=(state)=>{
return{
    cart:state.cart
}
}
const mapDispatchToProps=(dispatch,props)=>{
return {
    deleteItem:(id)=>{
        dispatch(actions.deleteItem(id))
    },
    changeMessage:(message)=>{
      dispatch(actions.changeMessage(message))
    },
    increaseItem:(item)=>{
        dispatch(actions.increaseItem(item))
    },
    decreaseItem:(item)=>{
        dispatch(actions.decreaseItem(item))
    }
}
}
export default connect(mapStateToProp,mapDispatchToProps)(CartContainer);