import { Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
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
  scrollerView:{ 
    backgroundColor: '#24292e',
  }
});

const AppBar = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top']}>
        <ScrollView style={styles.scrollerView} horizontal contentContainerStyle={{ 
          flexDirection: 'row', alignItems: 'center' 
        }}>
            <Text style={styles.title}>Repositories</Text>
            <Link to="/signin" style={{ padding: 10 }}>
              <Text style={styles.signInButton}>Sign In</Text>
            </Link>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default AppBar;