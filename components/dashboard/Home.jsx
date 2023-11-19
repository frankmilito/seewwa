import {View, Text, StyleSheet, Image} from 'react-native';
import img from '../../assets/image/Work.png';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = () => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>Welcome</Text>
          <Text>Franklin O.</Text>
          <Icon name="ios-star" size={30} color="gold" />
        </View>
        <Image source={img} style={styles.image} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  image: {
    height: 100,
    width: 100,
  },
});
