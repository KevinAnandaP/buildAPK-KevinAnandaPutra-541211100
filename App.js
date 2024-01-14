import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ScreenLogin from './components/Pages/LoginScreen';
import ScreenRegister from './components/Pages/RegisterScreen';
import ScreenPortofolio from './components/Pages/PortofolioScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={ScreenLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Porto"
          component={ScreenPortofolio}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={ScreenRegister}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
