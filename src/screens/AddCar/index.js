import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useState} from 'react';
import TextField from '../../components/TextField';
import PrimaryButton from '../../components/PrimaryButton';
import useCar from '../../hooks/useCar';
import DropDown from 'react-native-paper-dropdown';

const AddCar = ({navigation, route}) => {
  const [name, setName] = useState(
    route.params != undefined ? route.params.item.name : '',
  );
  const [model, setModel] = useState(
    route.params != undefined ? route.params.item.model : '',
  );
  const [make, setMake] = useState(
    route.params != undefined ? route.params.item.make : '',
  );
  const [regNo, setRegNo] = useState(
    route.params != undefined ? route.params.item.registration_no : '',
  );
  const [showDropDown, setShowDropDown] = useState(false);
  console.log(route.params != undefined && route.params.item);
  const {cars, addCar, updateItem} = useCar();
  const makeList = [
    {
      label: 'Toyota',
      value: 'Toyota',
    },
    {
      label: 'BMW',
      value: 'BMW',
    },
    {
      label: 'Tesla',
      value: 'Tesla',
    },
  ];
  const handleAddCar = () => {
    console.log('im being handled');
    if (
      name.length > 0 &&
      model.length > 0 &&
      regNo.length > 0 &&
      make.length > 0
    ) {
      addCar({
        id: cars.length + 1,
        name: name,
        model: model,
        make: make,
        registration_no: regNo,
      });
      navigation.navigate('Home');
    } else {
      alert('kindly fill form properly');
    }
  };
  const handleEdit = () => {
    console.log('im being handled');
    if (
      name.length > 0 &&
      model.length > 0 &&
      regNo.length > 0 &&
      make.length > 0
    ) {
      updateItem({
        id: route.params.item.id,
        name: name,
        model: model,
        make: make,
        registration_no: regNo,
      });
      navigation.navigate('Home');
    } else {
      alert('kindly fill form properly');
    }
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
        label="Reg No"
        placeholder="Your Registration Number"
        val={regNo}
        setvalue={setRegNo}
      />
      {/* <TextField
        label="Make"
        placeholder="Make"
        val={make}
        setvalue={setMake}
      /> */}
      <View style={{width: width / 1.1, alignSelf: 'center', marginTop: 20}}>
        <DropDown
          label={'Make'}
          mode={'outlined'}
          visible={showDropDown}
          showDropDown={() => setShowDropDown(true)}
          onDismiss={() => setShowDropDown(false)}
          value={make}
          setValue={setMake}
          list={makeList}
        />
      </View>
      <View style={styles.buttonBox}>
        <PrimaryButton
          buttonText={route.params != undefined ? 'Update' : 'Add Car'}
          buttonFunction={route.params != undefined ? handleEdit : handleAddCar}
        />
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
