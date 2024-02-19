import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';


import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image, Platform, TouchableHighlight } from 'react-native';




export default function App() {
  const [companyName, setCompanyName] = useState('');
  const [branchName, setBranchName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [buttonPressed, setButtonPressed] = useState(false);

  const handleGenerateOTP = () => {
    if (companyName && branchName && username && password) {
      console.log('Generating OTP');
      alert('Otp successfully!');
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleLogin = () => {
    if (companyName && branchName && username && password && otp) {
      console.log('Logging in with company name:', companyName,'Logging in with branchName:', branchName, 'Logging in with username:', username, 'Logging in with password :',password);
      alert('you are successfully login!');
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleForgotPassword = () => {
    // Implement your forgot password logic here
    console.log('Forgot password');
    
    
  };

  const buttonStyles = [
    styles.button,
    { backgroundColor: buttonPressed ? 'darkgreen' : '#6895D2' }
  ];

  const handleButtonPress = () => {
    setButtonPressed(true);
  };

  const handleButtonRelease = () => {
    setButtonPressed(false);
  };


return (
  <ImageBackground source={require('/Users/a/ContainerTrackingApp/assets/bg.png')} style={styles.background}>
    <View style={styles.container}>
      <Image source={require('/Users/a/ContainerTrackingApp/assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Seabird CFS Container Tracking</Text>
      <TextInput
        style={styles.input}
        placeholder="Company Name"
        onChangeText={setCompanyName}
        value={companyName}
      />
      <TextInput
        style={styles.input}
        placeholder="Branch Name"
        onChangeText={setBranchName}
        value={branchName}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <View style={styles.otpContainer}>
        <TextInput
          style={styles.inputOtp}
          placeholder="OTP"
          onChangeText={setOtp}
          value={otp}
        />
        <TouchableOpacity
          style={buttonStyles}
          onPress={handleGenerateOTP}
        >
          <Text>Generate OTP </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[buttonStyles, styles.loginButton]} 
        onPress={handleLogin}
      >
        <Text>Login </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[buttonStyles, styles.forgotbutton]} 
        onPress={handleForgotPassword}
      >
        <Text>forget password ? </Text>
      </TouchableOpacity>

   
      <StatusBar style="auto" />
    </View>
  </ImageBackground>
);
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 90,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 310,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 10, 
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputOtp: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft:10,
    marginTop: 20,
    marginRight: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  button: {
    marginTop: 20,
    padding: 10,
    width:130,
    borderRadius: 20, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    width: 200, 
    backgroundColor: '#40A2D8',
  },
  forgotbutton: {
    marginTop: 10,
    padding: 10,
    width:150,
    borderRadius: 20, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});



