import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import notification from '../../assets/image/Notification.png';
import location from '../../assets/image/Vector.png';
import search from '../../assets/image/search.png';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text>Welcome</Text>
          <Text>Franklin O.</Text>
        </View>
        <Image source={notification} style={styles.image} />
      </View>
      <View style={[styles.header, styles.subHeader]}>
        <View style={styles.flexdirection}>
          <Image source={location} style={styles.image} />
          <Text>Wuse Nigeria</Text>
        </View>
        <Text>Change Location</Text>
      </View>
      <View>
        <Text>What do you need</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} />
          <Image source={search} style={styles.inputImg} />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexdirection: {
    flexDirection: 'row',
    gap: 4,
  },
  image: {
    // height: 100,
    // width: 100,
  },
  textInput: {
    backgroundColor: '#F9F9F9',
    marginBottom: 12,
    paddingVertical: 16,
    paddingHorizontal: 12,
    fontFamily: 'PlusJakartaSans-Regular',
    // height: 50,
  },
  inputContainer: {
    justifyContent: 'center',
  },
  inputImg: {
    position: 'absolute',
    left: 10,
    top: 15,
  },
});
