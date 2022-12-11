import {View, Text, TextInput, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import {styles} from './styles';

const TextField = props => {
  const {label, placeholder, keyboardtype, pas, val, setvalue} = props;

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.inputfield}
        placeholder={placeholder}
        placeholderTextColor={'rgba(100, 116, 139, 1)'}
        keyboardType={keyboardtype}
        secureTextEntry={pas ? true : false}
        value={val}
        onChangeText={v => setvalue(v)}
      />
    </View>
  );
};

export default TextField;
