import React, { Component } from 'react';
import {connect} from "react-redux";
import Message from "./../components/message";
import PropTypes from "prop-types";

class MessageContainer extends Component {
  render() {
     
    return (
        <Message Message={this.props.Message}/>
    );
  }
}
const mapStateToProps=(state)=>{
    return{
        Message:state.Message
      
    }
}

MessageContainer.propTypes={
    Message:PropTypes.string.isRequired
}
export default connect(mapStateToProps,null)(MessageContainer);