import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.headerImage} source={require('../logo-3.png')}></Image>
      </View>
      <Text style={styles.textHeading}>Return of the Video Game Gallery</Text>
      <Text style={styles.textFooter}>Henry Friman 2023</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009999',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeading: {
    flex: 4,
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
    margin: 20
  },
  header: {
    flex: 1, 
    alignItems: 'center', 
    width: 3000, 
    height: 300, 
    backgroundColor: 'white'
  },
  headerImage: {
    flex: 1,
    alignItems: 'flex-end',
    width: 300,
    height: 100,
  },
  textFooter: {
    marginBottom: 40,
    color: 'white'
  }
});
