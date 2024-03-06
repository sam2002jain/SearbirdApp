import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image, Platform} from 'react-native';

export default function Login() {
  const navigation = useNavigation();

  const [companyName, setCompanyName] = useState('');
  const [branchName, setBranchName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [buttonPressed, setButtonPressed] = useState(false);

  const [showPassword, setShowPassword] = useState(false); 
  
    // Function to toggle the password visibility state 
    const toggleShowPassword = () => { 
        setShowPassword(!showPassword); 
    }; 

 
  const companyData = [
    { name: 'Company A', branches: ['Branch X'] },
    { name: 'Company B', branches: ['Branch Y', 'Branch Z'] },
    // Add more companies and their branches here as needed
  ];

  // Function to get branches based on selected company
  const getBranches = (company) => {
    const selectedCompany = companyData.find(item => item.name === company);
    return selectedCompany ? selectedCompany.branches : [];
  };

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
      console.log('Logging in with company name:', companyName, 'Logging in with branchName:', branchName, 'Logging in with username:', username, 'Logging in with password :', password);
      alert('you are successfully login!');
      
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleForget = ()=> {
    navigation.navigate('ForgetPassword');
  }

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
        <Picker
          selectedValue={companyName}
          style={styles.input}
          onValueChange={(itemValue) => {
            setCompanyName(itemValue);
            const branches = getBranches(itemValue);
            setBranchName(branches[0]); // Auto-select the first branch
          }}
        >
          <Picker.Item label="Select Company" value="" />
          {companyData.map((company, index) => (
            <Picker.Item key={index} label={company.name} value={company.name} />
          ))}
        </Picker>
        <Picker
          selectedValue={branchName}
          style={styles.input}
          onValueChange={(itemValue) => setBranchName(itemValue)}
        >
          <Picker.Item label="Select Branch" value="" />
          {getBranches(companyName).map((branch, index) => (
            <Picker.Item key={index} label={branch} value={branch} />
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
        {/* <MaterialCommunityIcons 
            name={showPassword ? 'eye-off' : 'eye'} 
            size={24} 
            color="#aaa"
            style={styles.icon} 
            onPress={toggleShowPassword} 
          /> 
         */}
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
    flexDirection:'vertical',
    marginBottom: 5,
    marginTop: 10,
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
    marginStart: 5,
  },
  input: {
    width: 310,
    height: 40,
    fontSize:15,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    paddingRight:10,
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
//   icon: { 
//     marginLeft: 10,

// }, 
  forgotbutton: {
    marginTop: 10,
    padding: 10,
    width: 150,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
