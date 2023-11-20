import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Pressable,
} from 'react-native';
import notification from '../../assets/image/Notification.png';
import location from '../../assets/image/Vector.png';
import search from '../../assets/image/search.png';
import postRequest from '../../assets/image/post-request.png';
import allrequests from '../../assets/image/all-requests.png';
import cleaner from '../../assets/image/cleaner.png';
import chore from '../../assets/image/chores.png';
import handyman from '../../assets/image/handyman.png';

const Home = () => {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.text}>Welcome</Text>
            <Text style={[styles.text, styles.subHeader]}>Franklin O.</Text>
          </View>
          <Image source={notification} style={styles.image} />
        </View>
        <View style={[styles.header, styles.header2]}>
          <View style={styles.flexdirection}>
            <Image source={location} style={styles.image} />
            <Text style={[styles.text, styles.textGray]}>Wuse Nigeria</Text>
          </View>
          <Text style={[styles.text, styles.textBlue]}>Change Location</Text>
        </View>
        <View>
          <Text style={[styles.text]}>What do you need</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} />
            <Image source={search} style={styles.inputImg} />
          </View>
        </View>
        <View style={styles.requests}>
          <Pressable
            style={({pressed}) => [styles.request, pressed && styles.pressed]}>
            <Image source={postRequest} style={styles.requestImg} />
            <Text style={styles.text}>Post a request</Text>
          </Pressable>
          <Pressable
            style={({pressed}) => [
              styles.request,
              styles.greenBg,
              pressed && styles.pressed,
            ]}>
            <Image source={allrequests} style={styles.requestImg} />
            <Text style={styles.text}>All requests</Text>
          </Pressable>
        </View>
        <View style={styles.services}>
          <View style={styles.flexBetween}>
            <Text style={styles.text}>Services</Text>
            <Text style={[styles.text, styles.textBlue]}>View All</Text>
          </View>
          <ScrollView
            horizontal
            style={styles.scroll}
            showsHorizontalScrollIndicator={false}>
            <View>
              <Image source={cleaner} style={styles.scrollImg} />
              <Text style={[styles.text]}>Cleaning</Text>
            </View>
            <View>
              <Image source={chore} style={styles.scrollImg} />
              <Text style={[styles.text]}>Chores</Text>
            </View>
            <View>
              <Image source={cleaner} style={styles.scrollImg} />
              <Text style={[styles.text]}>Cleaning</Text>
            </View>
            <View>
              <Image source={handyman} style={styles.scrollImg} />
              <Text style={[styles.text]}>Handyman</Text>
            </View>

            <Image />
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    // flex: 1,
  },
  container: {
    paddingTop: 40,
    flex: 1,
    padding: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  text: {
    fontFamily: 'PlusJakartaSans-Regular',
  },
  textGray: {
    color: 'rgba(99, 99, 99, 1)',
    fontSize: 15,
  },
  textBlue: {
    color: 'rgba(24, 97, 217, 1)',
    fontWeight: 400,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  subHeader: {
    fontWeight: 600,
    fontSize: 18,
    marginTop: 5,
  },
  header2: {
    marginBottom: 50,
  },
  flexdirection: {
    flexDirection: 'row',
    gap: 6,
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
    paddingLeft: 35,
    marginTop: 5,
    // height: 50,
  },
  inputContainer: {
    justifyContent: 'center',
    marginBottom: 20,
  },
  inputImg: {
    position: 'absolute',
    left: 10,
    top: 20,
  },
  requests: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 30,
  },
  request: {
    flexBasis: 160,
    // height: 100,
    backgroundColor: 'rgba(24, 97, 217, 0.06)',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 10,
    marginBottom: 20,
  },
  greenBg: {
    backgroundColor: 'rgba(228, 251, 236, 1)',
  },
  requestImg: {
    marginBottom: 10,
  },
  pressed: {
    opacity: 0.7,
  },
  flexBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  scrollImg: {
    marginRight: 10,
    marginBottom: 5,
  },
});
