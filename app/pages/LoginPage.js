import React, { useState } from 'react';

import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ImageBackground,
} from 'react-native';
import Login from '../components/login';

const LoginPage = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailStateHandler = (email) => {
    setEmail(email);
  }

  const passwordStateHandler = (password) => {
    setPassword(password);
  }

  const loginHandler = () => {
    console.log(`Logando estou... user:${email} pass:${password}`);
    props.navigation.push('HomePage')
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ImageBackground source={require('../../assets/baby-yoda.jpg')} style={{ width: '100%', height: '100%' }} imageStyle={{ opacity: 0.4 }}>
        <View style={styles.form}>
          <Login
            emailStateHandler={emailStateHandler}
            passwordStateHandler={passwordStateHandler}
            handleAction={loginHandler}
            type="Login" />
        </View>
      </ ImageBackground>
    </KeyboardAvoidingView>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

LoginPage.navigationOptions = screenProps => ({
  header: null
});

export default LoginPage;
