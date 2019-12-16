import React from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  
} from 'react-native';

const Login = (props) => (
  <>
    <TextInput
      style={styles.inputBox}
      placeholder="Email"
      placeholderTextColor="#000"
      selectionColor="#000"
      keyboardType="email-address"
      onSubmitEditing={() => password.focus()}
      onChangeText={(email) => props.emailStateHandler(email)}
    />
    <TextInput
      style={styles.inputBox}
      placeholder="Senha"
      secureTextEntry={true}
      placeholderTextColor="#000"
      onChangeText={(password) => props.passwordStateHandler(password)}
    />
    <TouchableOpacity
      onPress={props.handleAction}
      style={styles.button}>
        <Text>Login</Text>
    </TouchableOpacity>
  </>
);

const styles = StyleSheet.create({
  inputBox: {
    height: 40,
    width: "60%",
    borderColor: '#26a37d',
    color: '#000',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20
  },
  button: {
    borderRadius:25,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: "rgba(38, 163, 125, 1)",
    borderColor: "rgba(52, 235, 180, 1)",
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
});

export default Login;
