import { Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import { Link, useNavigate } from 'react-router-native';
import { useApolloClient, useQuery } from '@apollo/client/react';
import { GET_ME } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';

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
  const { data, loading } = useQuery(GET_ME);
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const navigate = useNavigate();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    navigate('/');
    await apolloClient.resetStore();
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top']}>
        <ScrollView style={styles.scrollerView} horizontal contentContainerStyle={{ 
          flexDirection: 'row', alignItems: 'center' 
        }}>
            <Link to="/" style={{ padding: 10 }}>
              <Text style={styles.title}>Repositories</Text>
            </Link>
            {!loading &&
              (data?.me ? (
                <Pressable onPress={signOut} style={{ padding: 10 }}>
                  <Text style={styles.signInButton}>Sign Out</Text>
                </Pressable>
              ) : (
                <Link to="/signin" style={{ padding: 10 }}>
                  <Text style={styles.signInButton}>Sign In</Text>
                </Link>
              ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default AppBar;