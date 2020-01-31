import React, { Component } from 'react';
import {StyleSheet, View, Text } from 'react-native';
import Input from '../components/Input';
import LoginButton from '../components/LoginButton';




export default class LoginForm extends Component {
  render() {
    return (
      <View>
        <Text style={styles.loginFormTitle} > LoginForm </Text>
        <Input  autoCapitalize="none"
                placeholder="Kullanıcı Adınız"
                returnKeyType={"next"}
                onSubmitEditing={()=> this.passwordInput.focus()}
         />
         <Input secureTextEntry={true}
                placeholder="Şifre"
                inputRef={input=>this.passwordInput=input}  
                returnKeyType={"go"}
         />   
         <LoginButton 
            color={"#f1f1f1"}
            backgroundColor={"#000000"}
            text={"Giriş Yap"}
         />     
      </View>
    );
  }
}

const styles = StyleSheet.create({
    loginFormTitle:{
       marginBottom:20,
    }
});
