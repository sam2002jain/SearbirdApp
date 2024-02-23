
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';

export default function ForgetPassword() {
  const [companyName, setCompanyName] = useState('');
  const [branchName, setBranchName] = useState('');
  const [username, setUsername] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [otp, setOtp] = useState('');
  const [buttonPressed, setButtonPressed] = useState(false);

  const handleGenerateOTP = () => {
    if (companyName && branchName && username && mobileNo) {
      console.log('Generating OTP');
      alert('OTP generated successfully!');
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleSubmit = () => {
    if (companyName && branchName && username && mobileNo && otp) {
      console.log('Submitting forget password request');
      alert('Forget password request submitted successfully!');
    } else {
      alert('Please fill in all fields');
    }
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
        <Text style={styles.title}>Forget Password</Text>
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
          placeholder="Mobile Number"
          onChangeText={setMobileNo}
          value={mobileNo}
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
            <Text>Generate OTP</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[buttonStyles, styles.submitButton]}
          onPress={handleSubmit}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
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
    marginLeft: 10,
    marginTop: 20,
    marginRight: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  button: {
    marginTop: 20,
    padding: 10,
    width: 130,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButton: {
    width: 200,
    backgroundColor: '#40A2D8',
  },
});
