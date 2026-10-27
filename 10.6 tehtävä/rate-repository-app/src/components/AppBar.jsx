import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 5 + Constants.statusBarHeight,
    backgroundColor: '#24292e',
  },
  signInButton: {
    color: 'white',
    fontSize: 16,},
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',},
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Link to="/signin" style={{ padding: 10 }}>
        <Text style={styles.signInButton}>Sign In</Text>
      </Link>
      <Text style={styles.title}>Repositories</Text>
    </View>
  );
};

export default AppBar;