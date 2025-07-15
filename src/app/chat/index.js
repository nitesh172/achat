import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import { fs, hp, wp } from '../../services/responsive-manager'
import { StatusBar } from 'expo-status-bar'
import data from '../../services/data'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { Paperclip, Send } from 'lucide-react-native'
import CustomKeyboardView from '../../components/CustomKeyboardView'
import { useLocalSearchParams } from 'expo-router'

const Chat = () => {
  const { id } = useLocalSearchParams()

  const [text, setText] = useState('')
  const [messages, setMessages] = useState(
    [
      { id: 0, message: 'Today', userID: 0, type: 'system' },
      { id: 1, message: "Hey, what's up?", userID: 1 },
      { id: 2, message: 'Not much, just hanging out at home. How about you?', userID: 2 },
      {
        id: 3,
        message: "Same here. I've been trying to stay busy by working on some art projects.",
        userID: 1,
      },
      { id: 4, message: 'That sounds cool. What kind of art are you into?', userID: 2 },
      {
        id: 5,
        message:
          "I like to do a lot of different things, but right now I'm really into painting. I've been working on a series of abstract landscapes.",
        userID: 1,
      },
    ].reverse()
  )
  return (
    <CustomKeyboardView>
      <View style={{ backgroundColor: '#161616', flex: 1 }}>
        <StatusBar style='light' backgroundColor={'#1F1F1F'} />
        <FlatList
          data={messages}
          showsVerticalScrollIndicator={false}
          inverted
          style={{ paddingHorizontal: wp(16) }}
          keyExtractor={(item) => item.id}
          renderItem={(item) => {
            return item.item.type === 'system' ? (
              <Text
                style={{
                  alignSelf: 'center',
                  fontFamily: 'GilroyBold',
                  color: '#4D4C4E',
                  fontSize: fs(18),
                  marginBottom: hp(26),
                }}
              >
                Today
              </Text>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom:
                    messages[item.index - 1]?.userID === 2 && item.item.userID === 2
                      ? hp(4)
                      : hp(20),
                  alignItems: 'center',
                  gap: 10,
                  maxWidth: '70%',
                  alignSelf: item.item.userID === 1 ? 'flex-start' : 'flex-end',
                }}
              >
                {item.item.userID === 1 && (
                  <View
                    style={{
                      width: 51,
                      height: 51,
                      borderRadius: 18,
                      backgroundColor: data[id || 2].color,
                      alignItems: 'center',
                    }}
                  >
                    <Image
                      source={data[id || 2].image}
                      contentFit='cover'
                      cachePolicy={'memory'}
                      transition={1000}
                      style={{ flex: 1, width: '100%' }}
                    />
                  </View>
                )}
                <LinearGradient
                  colors={
                    item.item.userID === 1
                      ? ['#1F1F1F', '#1F1F1F']
                      : ['rgba(131, 14, 247, 1)', 'rgba(172, 91, 253, 1)']
                  }
                  start={{ x: 0.48, y: 0 }}
                  style={{
                    paddingHorizontal: wp(16),
                    paddingVertical: hp(10),
                    backgroundColor: '#1F1F1F',
                    borderRadius: 12,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'GilroyMedium',
                      color: item.item.userID === 1 ? '#BABABA' : '#ffffff',
                      fontSize: fs(18),
                    }}
                  >
                    {item.item.message}
                  </Text>
                </LinearGradient>
              </View>
            )
          }}
        ></FlatList>
        <View
          style={{
            backgroundColor: '#1F1F1F',
            padding: wp(26),
            flexDirection: 'row',
            gap: 12,
            alignItems: 'center',
          }}
        >
          <Paperclip size={32} color='#7C01F6' />
          <TextInput
            style={{
              backgroundColor: '#272626',
              color: '#C8C8C8',
              borderRadius: 10,
              fontSize: fs(18),
              fontFamily: 'GilroyBold',
              paddingHorizontal: wp(20),
              paddingVertical: hp(14),
              flex: 1,
            }}
            value={text}
            onChangeText={(newText) => setText(newText)}
            placeholder='Search...'
            placeholderTextColor='#4D4C4E'
          />
          <Pressable
            onPress={() => {
              let temp = [...messages.reverse()]
              temp.push({ userID: 2, id: Math.random(1), message: text })
              setMessages(temp.reverse())
            }}
          >
            <Send size={32} color='#7C01F6' />
          </Pressable>
        </View>
      </View>
    </CustomKeyboardView>
  )
}

export default Chat
