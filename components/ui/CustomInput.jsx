import {TextInput, StyleSheet, View} from 'react-native';
import React from 'react';

const CustomInput = ({placeholder, style}) => {
  return (
    // <View style={{flex: 1}}>
    <TextInput placeholder={placeholder} style={[styles.input, style]} />
    // </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#F9F9F9',
    marginBottom: 12,
    paddingVertical: 16,
    paddingHorizontal: 12,
    fontFamily: 'PlusJakartaSans-Regular',
  },
});
