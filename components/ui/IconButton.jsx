import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const IconButton = ({name, size, color}) => {
  console.log(name, size, color);
  return <Icon name={name} size={size} color={color} />;
};

export default IconButton;
