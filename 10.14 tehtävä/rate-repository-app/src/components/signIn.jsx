import { StyleSheet, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import useSignIn from '../hooks/useSignIn';

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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signIn] = useSignIn();

  const ValidateForm = () => {
    if (username === '' || password === '') {
      alert('Please fill in all fields');
      return false;
    };
    return true;
  };

  const onSubmit = async () => {
    if (!ValidateForm()) {
      return;
    }

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={username} onChangeText={setUsername} placeholder="Username" />
      <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry />
      <View style={styles.Button}>
        <Button title="Sign In" onPress={onSubmit} />
      </View>
    </View>
  );
};

export default SignIn;