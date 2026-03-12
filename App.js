import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.redBg} />
        <View style={styles.blueBg} />
        <View style={styles.greenBg} />
        <View style={styles.orangeBg} />

        <View style={styles.row}>
          <View style={styles.red} />
          <View style={styles.blue} />
          <View style={styles.green} />
          <View style={styles.orange} />
        </View>
      </View>
      <View style={styles.bottomSection} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    backgroundColor: '#fff',
    width: '100%',
    height: 210,
    paddingTop: 30,
  },
  redBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '12%',
    height: 30,
    backgroundColor: 'red',
  },
  blueBg: {
    position: 'absolute',
    top: 0,
    left: '12%',
    width: '38%',
    height: 30,
    backgroundColor: 'blue',
  },
  greenBg: {
    position: 'absolute',
    top: 0,
    left: '50%',
    width: '25%',
    height: 30,
    backgroundColor: 'green',
  },
  orangeBg: {
    position: 'absolute',
    top: 0,
    left: '75%',
    width: '25%',
    height: 30,
    backgroundColor: 'orange',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start', 
    width: '100%',
  },
  red: {
    width: '12%',
    height: 50,
    backgroundColor: 'red',
    marginTop: -19, 
  },
  blue: {
    width: '38%',
    height: 50,
    backgroundColor: 'blue',
  },
  green: {
    width: '25%',
    height: 100,
    backgroundColor: 'green',
  },
  orange: {
    width: '25%',
    height: 150,
    backgroundColor: 'orange',
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#3a3a3a',
  },
});