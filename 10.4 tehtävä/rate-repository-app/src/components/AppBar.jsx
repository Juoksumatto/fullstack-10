import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',},
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Repositories</Text>
    </View>
  );
};

export default AppBar;