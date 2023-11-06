import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from '../../components/Header';

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#98EECC',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
