import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.titlebar}>

    </View>
  );
}

const styles = StyleSheet.create({
  titlebar: {
    flex: 2,
    backgroundColor: '#95e386',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
