import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';

const PrimaryButton = props => {
  const {buttonText, buttonFunction} = props;
  return (
    <TouchableOpacity>
      <Text style={styles.primaryButton} onPress={buttonFunction}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
