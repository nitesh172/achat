import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'

const CustomKeyboardView = ({ children }) => {
  const ios = Platform.OS === 'ios'
  return (
    <KeyboardAvoidingView
      behavior={ios ? 'padding' : 'height'}
      keyboardVerticalOffset={ios ? 145 : 124}
      style={{ flex: 1 }}
    >
      {/* <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flex: 1 }}
        bounces={false}
        showsVerticalScrollIndicator={false}
      > */}
      {children}
      {/* </ScrollView> */}
    </KeyboardAvoidingView>
  )
}

export default CustomKeyboardView
