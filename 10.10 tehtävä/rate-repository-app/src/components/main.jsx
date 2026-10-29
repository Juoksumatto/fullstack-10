import RepositoryList from './RepositoryList';
import { Route, Routes } from 'react-router-native';
import { StyleSheet, View } from 'react-native';
import SignIn from './signIn';
import AppBar from './AppBar';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </View>
  );
};
export default Main;