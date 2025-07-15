import { useReactNavigationDevTools } from '@dev-plugins/react-navigation'
import { Stack, useNavigationContainerRef } from 'expo-router'
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { fs, hp, wp } from '../services/responsive-manager'
import data from '../services/data'
import { Image } from 'expo-image'
import ChatHeader from '../components/ChatHeader'

SplashScreen.preventAutoHideAsync()

export default function Layout() {
  const navigationRef = useNavigationContainerRef()
  useReactNavigationDevTools(navigationRef)

  const [loaded, error] = useFonts({
    GilroyBold: require('../../assets/fonts/GilroyBold.ttf'),
    GilroyRegular: require('../../assets/fonts/Gilroy-Regular.ttf'),
    GilroySemiBold: require('../../assets/fonts/Gilroy-SemiBold.ttf'),
    GilroyMedium: require('../../assets/fonts/Gilroy-Medium.ttf'),
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  return (
    <Providers>
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen
          name='chat/index'
          options={{
            header: (value) => <ChatHeader value={value} />,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
          }}
        />
      </Stack>
    </Providers>
  )
}

function Providers({ children }) {
  return <GestureHandlerRootView style={styles.container}>{children}</GestureHandlerRootView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
