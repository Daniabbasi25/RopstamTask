import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import TextField from '../../components/TextField';
import PrimaryButton from '../../components/PrimaryButton';

const SignUpScreen = ({navigation}) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [number, setNumber] = useState();
  const handlesignup = () => {
    alert(name + email + password + number);
  };
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <TextField
        label="Name"
        placeholder="Your Name"
        val={name}
        setvalue={setName}
      />
      <TextField
        label="Email"
        placeholder="user@gmail.com"
        keyboardtype="email-address"
        val={email}
        setvalue={setEmail}
      />
      <TextField
        label="Password"
        placeholder="Your password"
        pas={true}
        val={password}
        setvalue={setPassword}
      />
      <TextField
        label="Phone Number"
        placeholder="0334 xxxx xxxx"
        keyboardtype="phone-pad"
        val={number}
        setvalue={setNumber}
      />
      <View style={styles.buttonBox}>
        <PrimaryButton buttonText="Sign Up" buttonFunction={handlesignup} />
      </View>
    </View>
  );
};

export default SignUpScreen;
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  conditionText: {
    fontSize: 13,
    color: '#64748B',
  },
  buttonBox: {
    marginTop: height / 14,
  },
});
