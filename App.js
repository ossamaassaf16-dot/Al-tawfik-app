import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tawfiq App</Text>
      <Text style={styles.subtitle}>مبروك يا أسامة! التطبيق يعمل بنجاح</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
  }
});
