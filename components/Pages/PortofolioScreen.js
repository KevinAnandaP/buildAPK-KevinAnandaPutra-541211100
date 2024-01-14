import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  Pressable,
  Button,
  TouchableOpacity
} from 'react-native';
import CustomButton from '../Props/CustomButton';
import CustomState from '../Props/CustomState';

const App = ({ navigation }) => {
  return (
    <ScrollView>
    <View style={styles.container}>

      <View>
        <Image 
        style={styles.avatar}
        source={require('../../assets/a715db8b9b3099423041d35ba3f62920.jpg')}/>
        <Text style={styles.title}>
        Kevin Ananda Putra
        </Text>
        <Text style={styles.paragraph}>
        Saya seorang backend programmer dengan pengalaman luas dalam pengembangan perangkat lunak. Saya mahir dalam bahasa pemrograman seperti Go, Python, dan Java, serta memiliki keahlian dalam merancang sistem backend efisien untuk aplikasi web dan mobile. Saya berkomitmen untuk menciptakan solusi yang andal dan scalable.
        </Text>
      </View>

      <View>
        <CustomButton btnStyle={styles.btnLog} btnTextStyle={styles.txtlog} btnText="Contact Me" />
      </View>

      <View>
      <Text style={styles.title2}>My Recent Project</Text>
      </View>

      <View>
        <Image 
    style={styles.porto}
    source={require('../../assets/Cineplex.png')}
    />
    </View>
      <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
          <View style={{ width: 440, marginTop: 8 }}>
            <Text style={styles.boldFont}>Clone Cineplex</Text>
            <Text style={styles.normalFont}>Movies Website</Text>
          </View>
          <View>
            <CustomState/>
        </View>
      </View>

      <View>
      <Image 
    style={styles.porto}
    source={require('../../assets/realtimechat.png')}
    />
      </View>

      <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
        <View style={{ width: 440, marginTop: 8 }}>
          <Text style={styles.boldFont}>Realtime Chat</Text>
          <Text style={styles.normalFont}>Using Go and WebSocket</Text>
        </View>
          <View>
          <CustomState/>
          </View>
      </View>

    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#9BBEC8',
    padding: 8
  },
  title: {
    color: '#427D9D',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title2: {
    marginTop: 40,
    color: '#427D9D',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    justifyContent: 'center'
  },
  paragraph: {
    marginTop: 10,
    fontSize: 16,
    color: '#3876BF',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 8  
  },
  boldFont: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#427D9D',
  },
  normalFont: {
    fontSize: 12,
    fontWeight: 'regular',
    textAlign: 'left',
    color: 'black',
  },
  avatar: {
    height: 128,
    width: 128,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 80,
    borderRadius: 100,
  },
  btnLog: {
    backgroundColor:"#427D9D",
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 5,
    height: 44,
    width: '100%',
  },
  txtlog: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 16
  },
  porto: {
    width:'auto',
    height:240,
    borderRadius:10,
    marginTop:10
  }
});

export default App;
