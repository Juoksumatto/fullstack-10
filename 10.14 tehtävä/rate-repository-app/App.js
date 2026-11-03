import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client/react';
import Main from './src/components/main';
import createApolloClient from './src/utils/apolloClient';

const apolloClient = createApolloClient();

const App = () => {
  console.log("env check:", process.env.EXPO_PUBLIC_ENV);
  return (
    <>
      <StatusBar style="auto" />
      <NativeRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
    </>
  );
};

export default App;