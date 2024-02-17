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
    // Implement your OTP generation logic here
    console.log('Generating OTP');
  };

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in with company name:', companyName,'Logging in with branchName:', branchName, 'Logging in with username:', username, 'Logging in with password :',password, otp);
  };

  const handleForgotPassword = () => {
    // Implement your forgot password logic here
    console.log('Forgot password');
  };

  const buttonStyles = [
    styles.button,
    { backgroundColor: buttonPressed ? 'darkgreen' : '#DDDDDD' } // Change color on press
  ];

  const handleButtonPress = () => {
    setButtonPressed(true);
  };

  const handleButtonRelease = () => {
    setButtonPressed(false);
  };

  // Rest of your code remains unchanged

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
  style={[buttonStyles, styles.loginButton]} // Apply loginButton style here
  onPress={handleLogin}
>
  <Text>Login </Text>
</TouchableOpacity>

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
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
    height: 100,
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
    borderRadius: 10, // Rounded corners for input fields
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
    borderRadius: 20, // Rounded corners for the button
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    width: 200, // Adjust the width as needed
    backgroundColor: '#40A2D8',
  },
  forgotPassword: {
    marginTop: 10,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

