import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image} from 'react-native';

export default function login() {
  const navigation = useNavigation();

  const [companyName, setCompanyName] = useState('');
  const [branchName, setBranchName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [selectedBCompany, setSelectedCompany] = useState('');
  const [getcompany, setGetCompany] = useState([]);
  const [getbranch, setGetBranch] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);

  useEffect(() => {
    getCompany();
  }, []);

  const getCompany = () => {
    axios.get(`http://localhost:8080/user/getCompany`)
      .then(response => {
        setGetCompany(response.data);
      })
      .catch(error => console.error('Error fetching companies:', error));
  }

  const getBranch = (id) => {
    axios.get(`http://localhost:8080/user/getBranch/${id}`)
      .then(response => {
        setGetBranch(response.data);
        setSelectedCompany(id);
      })
      .catch(error => console.error('Error fetching branches:', error));
  }

  const handleGenerateOTP = () => {
    if (companyName && branchName && username && password) {
      console.log('Generating OTP');
      alert('Otp successfully!');
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleLogin = async () => {
    if (!selectedBCompany) {
      alert("Please select the company.");
      return;
    }

    if (!branchName) {
      alert("Please select the branch.");
      return;
    }

    if (!username) {
      alert("Username is required.");
      return;
    }

    if (!password) {
      alert("Password is required.");
      return;
    }

    if (!otp) {
      alert("OTP is required.");
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8080/user/login?company=${selectedBCompany}&branch=${branchName}&user=${username}&password=${password}&otp=${otp}`);
      console.log(response.data); 
      alert(response.data);
    } catch (error) {
      console.error('Login error:', error.response.data); 
      alert('Login Failed');
    }
  };

  const handleForget = () => {
    navigation.navigate('ForgetPassword');
  }

  const buttonStyles = [
    styles.button,
    { backgroundColor: buttonPressed ? 'darkgreen' : '#6895D2' }
  ];

  return (
    <ImageBackground source={require('/Users/a/ContainerTrackingApp/assets/bg.png')} style={styles.background}>
      <View style={styles.container}>
      <Image source={require('/Users/a/ContainerTrackingApp/assets/logo.png')} style={styles.logo} />
        <Image style={styles.logo} />
        <Text style={styles.title}>Seabird CFS Container Tracking</Text>
        <Picker
          selectedValue={selectedBCompany}
          style={styles.input}
          onValueChange={(itemValue) => getBranch(itemValue)}
        >
          <Picker.Item label="Select Company" value="" />
          {getcompany.map((company, index) => (
            <Picker.Item key={index} label={company.companyName} value={company.companyId} />
          ))}
        </Picker>
        <Picker
          selectedValue={branchName}
          style={styles.input}
          onValueChange={(itemValue) => setBranchName(itemValue)}
        >
          <Picker.Item label="Select Branch" value="" />
          {getbranch.map((branch, index) => (
            <Picker.Item key={index} label={branch.branchName} value={branch.branchId} />
          ))}
        </Picker>
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
          secureTextEntry={!showPassword}
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
          onPress={handleForget}
        >
          <Text>Forget password ? </Text>
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
    marginBottom: 5,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 60,
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginStart: 5,
  },
  input: {
    width: 310,
    height: 40,
    fontSize: 15,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    paddingRight: 10,
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
  loginButton: {
    width: 200,
    backgroundColor: '#40A2D8',
  },
  forgotbutton: {
    marginTop: 10,
    padding: 10,
    width: 150,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
