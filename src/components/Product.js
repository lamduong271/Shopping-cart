import React, { Component } from 'react';

class Product extends Component {
    onAddToCart=(product)=>{
        this.props.onAddToCart(product);
        this.props.changeMessage("BUYING SUCCESS");
    }
    showRating=(numOfStar)=>{
        var rating=[];
        for(var i=0;i<numOfStar;i++){
        rating.push(<i key={i} className="fa fa-star"></i>);
        }
        for (var j=0;j<5-numOfStar;j++){
        rating.push(<i key={j+i} className="fa fa-star-o"></i>);
        }
        return rating;
        
    }
  render() {
      var {product}=this.props;
    return (
    
        <div className="col-lg-4 col-md-6 mb-r">
                            <div className="card text-center card-cascade narrower">
                                <div className="view overlay hm-white-slight z-depth-1">
                                    <img src={product.img}
                                        className="img-fluid" alt="" />
                                    <a>
                                        <div className="mask waves-light waves-effect waves-light"></div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <strong>
                                            <a>{product.name}</a>
                                        </strong>
                                    </h4>
                                    <ul className="rating">
                                        <li>
                                           {this.showRating(product.rating)}
                                        </li>
                                       
                                    </ul>
                                    <p className="card-text">
                                        {product.description}
                                    </p>
                                    <div className="card-footer">
                                        <span className="left">{product.price} $</span>
                                        <span className="right">
                                            <a 
                                            onClick={()=>this.onAddToCart(product)}
                                            className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
    );
  }
}

export default Product;
