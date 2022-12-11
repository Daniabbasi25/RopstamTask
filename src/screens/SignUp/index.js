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
import * as Users from '../../../assets/user.json';
const SignUpScreen = ({navigation}) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handlesignup = () => {
    // alert(name + email + password);
    console.log(Users.default);
    const alreadyExist = Users.default.find(item => item.email == email);

    if (alreadyExist == undefined) {
      Users.default.push({
        name: name,
        email: email,
        password: password,
      });
      alert('sign Up successfull use your email & password to login now');
      navigation.navigate('Login');
      console.log('my new user data=', Users.default);
    } else {
      console.log('Already exist', alreadyExist);
      alert('Uer with this email already exist');
    }
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
