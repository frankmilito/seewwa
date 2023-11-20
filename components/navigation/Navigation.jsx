import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../auth/Login';
import {Image, SafeAreaView, StyleSheet} from 'react-native';
import Register from '../auth/Register';
import OTP from '../auth/OTP';
import Home from '../dashboard/Home';
import Service from '../dashboard/Service';
import Appointments from '../dashboard/Appointments';
import Profile from '../dashboard/Profile';
import IconButton from '../ui/IconButton';

import Icon from 'react-native-vector-icons/Ionicons';

//Bottom navigation
const BottomTabs = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'white',
          padding: 10,
          height: 60,
          borderWidth: 0,
          borderColor: 'white',
        },
      }}>
      <BottomTabs.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused, color, size}) => (
            <Image source={require('../../assets/image/Home.png')} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="service"
        component={Service}
        options={{
          tabBarLabel: 'Find a service',
          tabBarIcon: ({focused, color, size}) => (
            <Image source={require('../../assets/image/Work.png')} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="appointments"
        component={Appointments}
        options={{
          tabBarLabel: 'Appointments',
          tabBarIcon: ({focused, color, size}) => (
            <Image source={require('../../assets/image/appointment.png')} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color, size}) => (
            <Image source={require('../../assets/image/Profile.png')} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};
//Stack navigation
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="otp"
        component={OTP}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="welcome"
        component={BottomNav}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
const Navigation = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
