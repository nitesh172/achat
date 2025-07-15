import React from 'react'
import { Platform, Pressable, StatusBar, Text, View } from 'react-native'
import Constants from 'expo-constants'
import { Image } from 'expo-image'
import data from '../services/data'
import { fs, hp, wp } from '../services/responsive-manager'
import { Phone, Camera } from 'lucide-react-native'
const statusBarHeight = Constants.statusBarHeight

const ChatHeader = (props) => {
  const { id } = props.value.route.params
  return (
    <View
      style={{
        backgroundColor: '#1F1F1F',
        paddingHorizontal: wp(11),
        paddingVertical: hp(12),
        alignItems: 'center',
        paddingTop: (Platform.OS == 'android' ? StatusBar.currentHeight : statusBarHeight) + 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
        <View
          style={{
            width: 68,
            height: 68,
            borderRadius: 27,
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
        <View style={{ flexDirection: 'column', gap: 5 }}>
          <Text
            style={{
              color: '#C8C8C8',
              fontFamily: 'GilroyBold',
              fontSize: fs(22),
            }}
          >
            {data[id || 2].name}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <View
              style={{
                borderRadius: 50,
                width: wp(8),
                height: hp(8),
                backgroundColor: '#00FF85',
                borderWidth: 1,
                borderColor: '#395447',
              }}
            />
            <Text
              style={{
                color: '#00FF85',
                fontFamily: 'GilroySemiBold',
                fontSize: fs(14),
              }}
            >
              Active
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', gap: 22, alignItems: 'center' }}>
        <Pressable>
          <Phone size={28} color='#4D4C4E' />
        </Pressable>
        <Pressable>
          <Camera size={28} color='#4D4C4E' />
        </Pressable>
      </View>
    </View>
  )
}

export default ChatHeader
