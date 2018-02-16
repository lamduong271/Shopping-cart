import React, { Component } from 'react';

class CartItem extends Component {
    deleteItem=(id)=>{
        this.props.deleteItem(id);
        this.props.changeMessage("ITEM DELETED");
    }
    increaseItem=(item)=>{
        this.props.increaseItem(item);
    }
    decreaseItem=(item)=>{
        this.props.decreaseItem(item);
    }
  render() {
      var {item}=this.props;
    return (
        <tr>
                        <th scope="row">
                            <img src={item.product.img}
                                alt="" className="img-fluid z-depth-0" />
                        </th>
                        <td>
                            <h5>
                                <strong>{item.product.name}</strong>
                            </h5>
                        </td>
                        <td>{item.product.price}$</td>
                        <td className="center-on-small-only">
                            <span className="qty">{item.quantity} </span>
                            <div className="btn-group radio-group" data-toggle="buttons">
                                <label onClick={()=>this.decreaseItem(item)} className="btn btn-sm btn-primary  btn-rounded waves-effect waves-light">
                                    <a>—</a>
                                </label>
                                <label onClick={()=>this.increaseItem(item)} className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                                    <a>+</a>
                                </label>
                            </div>
                        </td>
                        <td>{this.calTotalEach(item.product.price,item.quantity)}</td>
                        <td>
                            <button 
                            onClick={()=>this.deleteItem(item.product.id)}
                            type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                                title="" data-original-title="Remove item">
                                X
                            </button>
                        </td>
                    </tr>
    );
  }
  calTotalEach=(price,amount)=>{
    return price*amount;

}
}

export default CartItem;
