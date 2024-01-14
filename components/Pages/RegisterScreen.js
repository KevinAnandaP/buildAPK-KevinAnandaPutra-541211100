import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet, TouchableOpacity, Button, Pressable, Text } from 'react-native';
import CustomButton from '../Props/CustomButton';
import CustomInput from '../Props/CustomInput'

const login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <View>
        <Image 
          style={styles.avatar}
          source={require('../../assets/a715db8b9b3099423041d35ba3f62920.jpg')}/>
        <Text style={styles.title}>Selamat Datang!</Text>
        <Text style={styles.paragraph}>Sign up terlebih dahulu</Text>
      </View>

      <View style={{ marginTop: 24 }}>
        <TextInput
          style={styles.inputBox}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <View style={styles.passwordInput}>
          <TextInput
            style={styles.passwordTextInput}
            placeholder="Password"
            value={password}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.passwordInput}>
          <TextInput
            style={styles.passwordTextInput}
            placeholder="Confirm Password"
            value={confirmpassword}
            secureTextEntry={true}
            onChangeText={(text) => setconfirmPassword(text)}
          />
        </View>

      </View>
      <View style={{ marginTop: 40 }}>
        <CustomButton btnStyle={styles.btnLog} btnTextStyle={styles.txtlog} btnPress={() => navigation.navigate('Porto')} btnText="Register" />
      </View>

      <View style={{ marginTop: 10 }}>
        <Text style={styles.paragraph}>Atau</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.googleButton}>
          <Text style={{
            fontSize: 16,
            color: '#495E57',
            textAlign: 'center'
          }}>Google</Text>
        </TouchableOpacity>
      </View>

      <View style={{alignItems:'center', marginTop:12}}>       
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={styles.txtsmall}>Already Have an Account?</Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#9BBEC8',
    padding: 8,
  },
  btnLog: {
    backgroundColor:"#427D9D",
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 5,
    height: 44,
    width: '100%',
  },
  txtlog: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 16
  },
  txtsmall:{
    fontSize: 14,
    color: '#3876BF'
  },
  avatar: {
    width:'auto',
    height:240,
    borderRadius:10,
    marginTop:10
  },
  inputBox: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
  },
  title: {
    color: '#427D9D',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 36,
    justifyContent: 'center',
    marginTop: 40
  },
  paragraph: {
    marginTop: 2,
    fontSize: 14,
    color: '#3876BF',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  googleButton: {
    backgroundColor:"#ffffff",
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 5,
    height: 44,
    width: '100%',
  },
  passwordInput: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  passwordTextInput: {
    marginTop: 10,
    flex: 1,
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
  }
})

export default login;