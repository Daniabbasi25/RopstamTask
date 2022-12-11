import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useState} from 'react';
import TextField from '../../components/TextField';
import PrimaryButton from '../../components/PrimaryButton';
const AddCar = () => {
  const [name, setName] = useState();
  const [model, setModel] = useState();
  const [password, setPassword] = useState();
  const handleAddCar = () => {
    console.log('im being handled');
  };
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <TextField
        label="Car Name"
        placeholder="Your Car Name"
        val={name}
        setvalue={setName}
      />
      <TextField
        label="Model"
        placeholder="Car Model"
        // keyboardtype="email-address"
        val={model}
        setvalue={setModel}
      />
      <TextField
        label="Password"
        placeholder="Your password"
        pas={true}
        val={password}
        setvalue={setPassword}
      />

      <View style={styles.buttonBox}>
        <PrimaryButton buttonText="Add Car" buttonFunction={handleAddCar} />
      </View>
    </View>
  );
};

export default AddCar;

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
