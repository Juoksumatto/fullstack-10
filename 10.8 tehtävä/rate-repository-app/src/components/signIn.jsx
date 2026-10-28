import { StyleSheet, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 6,
    padding: 20,
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#6e6e6e',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  Button: {
    marginTop: 10,
  },
});

const SignIn = () => {
  const [Username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={Username} onChangeText={setUsername} placeholder="Username" />
      <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry />
      <View style={styles.Button}>
      <Button  title="Sign In" onPress={() => console.log({ Username, password })} />
      </View>
    </View>
    
      
  );
};

export default SignIn;