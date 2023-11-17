import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import Button from '../ui/Button';
import CustomInput from '../ui/CustomInput';
import {useNavigation} from '@react-navigation/native';

const OTP = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('register');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Enter OTP</Text>
        <Text style={styles.subText1}>Your phone number is 08100885533</Text>
        <Text style={styles.subText}>
          Enter the OTP sent to your phone number
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.flex}>
          <View style={styles.flexItems}>
            <CustomInput placeholder={''} style={styles.inputField} />
          </View>
          <View style={styles.flexItems}>
            <CustomInput placeholder={''} style={styles.inputField} />
          </View>
          <View style={styles.flexItems}>
            <CustomInput placeholder={''} style={styles.inputField} />
          </View>
          <View style={styles.flexItems}>
            <CustomInput placeholder={''} style={styles.inputField} />
          </View>
        </View>
      </View>
      <Button>Verify</Button>
      <View style={styles.account}>
        <Text style={styles.accountQ}>Don't have an account?</Text>
        <Text style={styles.accountBlue} onPress={handlePress}>
          Create an Account
        </Text>
      </View>
    </View>
  );
};

export default OTP;

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
  },
  subText1: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 14,

    color: '#333333',
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
  inputField: {
    textAlign: 'center',
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 30,
  },
  flexItems: {
    flex: 1,
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
