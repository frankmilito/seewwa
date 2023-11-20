import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import React from 'react';
import Button from '../ui/Button';
import CustomInput from '../ui/CustomInput';
import {useNavigation} from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('login');
  };
  const handleSubmit = () => {
    navigation.navigate('otp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Create an Account</Text>
          <Text style={styles.subText}>
            Available jobs in your city at your convenience
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.flex}>
            <View style={styles.flexItems}>
              <CustomInput placeholder={'First Name'} />
            </View>
            <View style={styles.flexItems}>
              <CustomInput placeholder={'Last Name'} />
            </View>
          </View>
          <CustomInput placeholder={'Last Name'} />
          <CustomInput placeholder={'Mobile Number'} />
          <CustomInput placeholder={' Email'} />
          <CustomInput placeholder={'Password'} />
          <CustomInput placeholder={'Confirm Password'} />
          <CustomInput placeholder={'How did you hear about us'} />
        </View>
        <Button onPress={handleSubmit}>Register</Button>
        <View style={styles.account}>
          <Text style={styles.accountQ}>Already have an account</Text>
          <Text style={styles.accountBlue} onPress={handlePress}>
            Login Here
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 12,
    paddingBottom: 24,
  },
  header: {
    marginTop: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '800',
    fontFamily: 'PlusJakartaSans-Regular',
    marginBottom: 6,
  },
  subText: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 14,
    marginBottom: 36,
    color: '#333333',
  },
  inputContainer: {
    marginBottom: 30,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
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
