import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';

export default function Changepass() {
  const navigation = useNavigation();
  const [selectedCompany, setSelectedCompany] = useState('');
  const [branchName, setBranchName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [companies, setCompanies] = useState([]);
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    getCompanies();
  }, []);

  const getCompanies = () => {
    axios.get(`http://localhost:8080/user/getCompany`)
      .then(response => {
        setCompanies(response.data);
      })
      .catch(error => console.error('Error fetching companies:', error));
  }

  const getBranches = (companyId) => {
    axios.get(`http://localhost:8080/user/getBranch/${companyId}`)
      .then(response => {
        setBranches(response.data);
        setSelectedCompany(companyId);
      })
      .catch(error => console.error('Error fetching branches:', error));
  }

  const handleChangePassword = async () => {
    if (!selectedCompany) {
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

    if (!password2) {
      alert("Please confirm your password.");
      return;
    }

    if (password !== password2) {
      alert("Passwords do not match.");
      return;
    }

    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[\w!@#$%^&*]+$/;
    if (!regex.test(password)) {
      alert(
        'Password must contain at least one capital letter and one symbol.'
      );
      return;
    }

    try {
      const response = await axios.post(`http://localhost:8080/user/changePassword`, null, {
        params: {
          company: selectedCompany,
          branch: branchName,
          user: username,
          password: password
        }
      });
      
      alert(response.data);
      navigation.navigate("Login");
    } catch (error) {
      console.error('Password change error:', error.response.data); 
      alert('Password change failed');
    }
  };

  return (
    <ImageBackground source={require('/Users/a/ContainerTrackingApp/assets/bg.png')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('/Users/a/ContainerTrackingApp/assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Change Password</Text>
        <Picker
          selectedValue={selectedCompany}
          style={styles.input}
          onValueChange={(itemValue) => getBranches(itemValue)}
        >
          <Picker.Item label="Select Company" value="" />
          {companies.map((company, index) => (
            <Picker.Item key={index} label={company.companyName} value={company.companyId} />
          ))}
        </Picker>
        <Picker
          selectedValue={branchName}
          style={styles.input}
          onValueChange={(itemValue) => setBranchName(itemValue)}
        >
          <Picker.Item label="Select Branch" value="" />
          {branches.map((branch, index) => (
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
          placeholder="Enter New Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm New Password"
          onChangeText={setPassword2}
          value={password2}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleChangePassword}
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
  logo: {
    width: 100,
    height: 60,
    marginBottom: 5,
  },
  submitButton: {
    marginTop: 20,
    padding: 10,
    width: 200,
    backgroundColor: '#40A2D8',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
