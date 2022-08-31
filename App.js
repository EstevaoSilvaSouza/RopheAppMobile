import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Imports das paginas para navegação!
import Login from './src/pages/Login'
import MainPrincipal from './src/pages/Inicio'
import Estoque from './src/pages/Estoque'

import AuthProvider from './src/contexts/Auth.Context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar style="auto" />
      <AuthProvider>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Inicio" component={MainPrincipal} options={{ headerShown: false }} />
          <Stack.Screen name="Estoque" component={Estoque} options={{ headerTitle: "Estoque POS" }} />
        </Stack.Navigator>
      </AuthProvider>


    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
