import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from 'src/screens/Login';
import { AuthStackParamList } from 'src/data/type';

const Stack = createNativeStackNavigator<AuthStackParamList>();

function AuthNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login"  component={Login} options={{ title: 'Login', headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  export default AuthNavigator;