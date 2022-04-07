import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MainTabsParamsList } from "src/data/type"
import Home from "src/screens/Home"
import Profile from "src/screens/Profile"
import SCREENS from "./Screens"

const MainTab = createBottomTabNavigator<MainTabsParamsList>()

export default (props: any) => {
  const { navigation, route } = props

//   useMainTabsHeader(navigation, route)
  return (
    <MainTab.Navigator initialRouteName={SCREENS.MAIN.HOME} screenOptions={{
      tabBarActiveTintColor: '#3DBBED',
      headerShown: false
    }}>
      <MainTab.Screen name={SCREENS.MAIN.HOME} component={Home} options={{
        tabBarLabel: 'Trang chủ'
      }} />
      <MainTab.Screen name={SCREENS.MAIN.PROFILE} component={Profile} options={{
        tabBarLabel: 'Thông tin'
      }} />
    </MainTab.Navigator>
  )
}

