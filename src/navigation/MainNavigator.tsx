import React, { useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from 'src/screens/Home';
import Profile from 'src/screens/Profile';
import { setNavigator } from './NavigationService';
import { MainStackParamList } from 'src/data/type';
import SCREENS from './Screens';
import MainTabs from './MainTabs';

const Stack = createNativeStackNavigator<MainStackParamList>();

function MainNavigator() {

    const navigation = useRef(null);

    useEffect(() => {
        setNavigator(navigation)
    }, [navigation])

    return (
      <NavigationContainer ref={navigation}>
        <Stack.Navigator initialRouteName={SCREENS.MAIN.TABS}>
          <Stack.Screen name={SCREENS.MAIN.TABS} component={MainTabs} options={{ headerShown: false }} />
          <Stack.Screen name={SCREENS.HOME.INDEX} component={Home} options={{ title: 'Overview' }} />
          <Stack.Screen name={SCREENS.PROFILE.INDEX} component={Profile} options={{ title: 'Profile', headerShown: true }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  export default MainNavigator;