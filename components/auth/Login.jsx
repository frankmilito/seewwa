import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import Button from '../ui/Button';
import CustomInput from '../ui/CustomInput';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('register');
  };

  const handleSubmit = () => {
    navigation.navigate('otp');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
        <Text style={styles.subText}>Enter your Account</Text>
      </View>
      <View style={styles.inputContainer}>
        <CustomInput placeholder={'Mobile Number'} />
        <CustomInput placeholder={'Password'} />
      </View>
      <Button onPress={handleSubmit}>Login</Button>
      <View style={styles.account}>
        <Text style={styles.accountQ}>Don't have an account?</Text>
        <Text style={styles.accountBlue} onPress={handlePress}>
          Create an Account
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 12,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '800',
    fontFamily: 'PlusJakartaSans-Regular',
    marginBottom: 6,
    // color: 'black',
  },
  subText: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 14,
    marginBottom: 36,
    color: '#333333',
  },
  inputContainer: {
    marginBottom: 40,
  },

  account: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  accountBlue: {
    color: '#1861D9',
    fontFamily: 'PlusJakartaSans-Regular',
    fontWeight: '500',
    fontSize: 13,
  },
  accountQ: {
    fontFamily: 'PlusJakartaSans-Regular',
  },
});
