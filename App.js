import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import AuthNavigator from 'src/navigation/AuthNavigator'
import MainNavigator from 'src/navigation/MainNavigator'
import store from 'src/redux/store'
import "src/i18next";

const App = () => {
  const isLogin = true

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        {
          (isLogin ? <MainNavigator /> : <AuthNavigator />)
        }
      </Provider>
    </SafeAreaProvider>
  )
}

export default App
