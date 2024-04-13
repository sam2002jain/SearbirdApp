
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';

export default function ForgetPassword() {
  const navigation = useNavigation();

  const [companyName, setCompanyName] = useState('');
  const [branchName, setBranchName] = useState('');
  const [username, setUsername] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [otp, setOtp] = useState('');
  const [selectedBCompany, setSelectedCompany] = useState('');
  const [getcompany, setGetCompany] = useState([]);
  const [getbranch, setGetBranch] = useState([]);
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
    if (companyName && branchName && username && mobileNo) {
      console.log('Generating OTP');
      alert('Otp successfully!');
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleSubmit = async () => {
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

    if (!mobileNo) {
      alert("mobile No. is required.");
      return;
    }

    if (!otp) {
      alert("OTP is required.");
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8080/user/forget?company=${selectedBCompany}&branch=${branchName}&user=${username}&mobile=${mobileNo}&otp=${otp}`);
      console.log(response.data); 
      
      if (response.data === "Now you can change your password") {
        navigation.navigate("ChangePassword");
        alert(response.data);
      } else {
        alert("User not found");
      }
      
    } catch (error) {
      console.error('Login error:', error.response.data); 
      alert('Login Failed');
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
      <Image source={require('/Users/a/ContainerTrackingApp/assets/logo.png')} style={styles.logo} />
      <Image style={styles.logo} />
        <Text style={styles.title}>Forget Password</Text>
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
    fontSize:15,
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
  logo: {
    width: 100,
    height: 60,
    marginBottom: 5,
  },
  submitButton: {
    width: 200,
    backgroundColor: '#40A2D8',
  },
});
