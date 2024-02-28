
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';

export default function Changepass() {

  const navigation = useNavigation();
  const [companyName, setCompanyName] = useState('');
  const [branchName, setBranchName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [buttonPressed, setButtonPressed] = useState(false);



  const handleSubmit = () => {
    if (companyName && branchName && username && password && password2) {
      console.log('Submitting forget password request');
      alert('Change password request submitted successfully!');
      navigation.navigate('Login');
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
        <Text style={styles.title}>Change Password</Text>
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
          placeholder="Enter Password"
          onChangeText={setPassword}
          value={password}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          onChangeText={setPassword2}
          value={password2}
        />
        

        <TouchableOpacity
          style={[buttonStyles, styles.submitButton]}
          onPress={handleSubmit}
        >
          <Text>Submit Changes</Text>
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
