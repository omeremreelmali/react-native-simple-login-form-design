import React, { Component } from 'react';
import {TouchableOpacity, Text,StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
export default class LoginButton extends Component {
 

  render() {
      
      const{
          color,backgroundColor
      }=this.props;
    return (
    <TouchableOpacity style={[styles.button, {backgroundColor}]}>
        <Text style={{color}}>
            {this.props.text}
        </Text>
    </TouchableOpacity>
    );
  }
}

LoginButton.propTypes={
    text:PropTypes.string.isRequired,
    color:PropTypes.string,
    backgroundColor:PropTypes.string,
}

const styles = StyleSheet.create({
    button:{
        paddingVertical:15,
        paddingHorizontal: 10,
        borderRadius:3,
        alignItems:"center",
    },
});
