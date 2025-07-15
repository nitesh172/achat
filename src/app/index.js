import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  ScrollView,
  Text,
  TextInput,
  View,
  StatusBar as ST,
  FlatList,
  Pressable,
  Platform,
} from 'react-native'
import { SlidersHorizontal, Search, TimerIcon } from 'lucide-react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Image } from 'expo-image'
import data from '../services/data'
import { fs, hp, wp } from '../services/responsive-manager'
import { router } from 'expo-router'
import Constants from 'expo-constants'
const statusBarHeight = Constants.statusBarHeight

const Home = () => {
  const backgroundStyle = {
    backgroundColor: '#161616',
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style='light' backgroundColor={backgroundStyle.backgroundColor} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior='automatic'
        style={backgroundStyle}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: wp(24),
            marginTop: (Platform.OS == 'android' && ST.currentHeight) + hp(24),
            marginBottom: hp(24),
          }}
        >
          <Text style={{ fontFamily: 'GilroyBold', fontSize: fs(20), color: '#4B4A4C' }}>
            Messages
          </Text>
          <SlidersHorizontal color='#4B4A4C' />
        </View>
        <View style={{ position: 'relative', marginHorizontal: wp(24), marginBottom: hp(24) }}>
          <TextInput
            style={{
              backgroundColor: '#1F1F1F',
              color: '#C8C8C8',
              borderRadius: 25,
              fontSize: fs(20),
              fontFamily: 'GilroyBold',
              paddingHorizontal: wp(22),
              paddingVertical: hp(11),
            }}
            placeholder='Search...'
            placeholderTextColor='#4B4A4C'
          />
          <Search color='#4B4A4C' style={{ position: 'absolute', top: 12, right: 20 }} />
        </View>
        <LinearGradient
          colors={['rgba(124, 1, 246, 1)', 'rgba(182, 109, 255, 1)']}
          start={{ x: 0.43, y: 0 }}
          style={{
            paddingHorizontal: wp(10),
            marginHorizontal: wp(24),
            paddingVertical: hp(6),
            marginBottom: hp(24),
            gap: 6,
            alignItems: 'center',
            flexDirection: 'row',
            alignSelf: 'flex-start',
            borderRadius: 28,
          }}
        >
          <Text style={{ fontFamily: 'GilroyBold', fontSize: fs(14), color: '#fff' }}>
            Currently Active
          </Text>
          <View
            style={{
              borderRadius: 50,
              width: wp(8),
              height: hp(8),
              backgroundColor: '#00FF85',
              borderWidth: 1,
              borderColor: '#C093ED',
            }}
          />
        </LinearGradient>
        <FlatList
          horizontal
          data={data}
          style={{ marginBottom: hp(24) }}
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => {
            return (
              <Pressable
                onPress={() => router.push({ pathname: `/chat`, params: { id: item.index } })}
                style={{
                  gap: 6,
                  alignItems: 'center',
                  marginLeft: item.index === 0 ? wp(24) : 0,
                  marginRight: wp(10),
                }}
              >
                <View
                  style={{
                    width: wp(84),
                    height: hp(108),
                    borderRadius: 36,
                    backgroundColor: item.item.color,
                    alignItems: 'center',
                  }}
                >
                  <Image
                    source={item.item.image}
                    contentFit='cover'
                    transition={1000}
                    style={{ flex: 1, width: '100%' }}
                  />
                </View>
                <Text
                  style={{
                    color: '#C8C8C8',
                    fontFamily: 'GilroyBold',
                    fontSize: fs(14),
                    textAlign: 'center',
                  }}
                >
                  {item.item.name}
                </Text>
              </Pressable>
            )
          }}
        ></FlatList>
        <LinearGradient
          colors={['rgba(124, 1, 246, 1)', 'rgba(182, 109, 255, 1)']}
          start={{ x: 0.43, y: 0 }}
          style={{
            paddingHorizontal: wp(10),
            marginHorizontal: wp(24),
            paddingVertical: hp(6),
            marginBottom: hp(24),
            gap: 6,
            alignItems: 'center',
            flexDirection: 'row',
            alignSelf: 'flex-start',
            borderRadius: 28,
          }}
        >
          <Text style={{ fontFamily: 'GilroyBold', fontSize: fs(14), color: '#fff' }}>Recents</Text>
          <TimerIcon color='#fff' size={14} />
        </LinearGradient>
        <FlatList
          data={data}
          scrollEnabled={false}
          style={{ marginBottom: hp(24), paddingHorizontal: wp(24) }}
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => {
            return (
              <View
                style={{
                  borderRadius: 22,
                  borderWidth: 1,
                  borderColor: '#444444',
                  paddingHorizontal: 11,
                  paddingVertical: 10,
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: hp(10),
                }}
              >
                <View style={{ alignItems: 'center', flexDirection: 'row', gap: 10 }}>
                  <View
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 50,
                      backgroundColor: item.item.color,
                      alignItems: 'center',
                    }}
                  >
                    <Image
                      source={item.item.image}
                      contentFit='cover'
                      transition={1000}
                      style={{ flex: 1, width: '100%' }}
                    />
                  </View>
                  <View style={{ flexDirection: 'column', gap: 10 }}>
                    <Text
                      style={{
                        color: '#C8C8C8',
                        fontFamily: 'GilroyRegular',
                        fontSize: fs(14),
                      }}
                    >
                      {item.item.name}
                    </Text>
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontFamily: 'GilroyBold',
                        fontSize: fs(14),
                      }}
                    >
                      Hey, what's up?
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'flex-end', gap: 10 }}>
                  <Text
                    style={{
                      color: '#7C01F6',
                      fontFamily: 'GilroySemiBold',
                      fontSize: fs(14),
                      textAlign: 'right',
                    }}
                  >
                    1 min
                  </Text>
                  <Pressable
                    style={{
                      borderRadius: 50,
                      width: 18,
                      height: 18,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#7C01F6',
                    }}
                  >
                    <Text
                      style={{
                        color: '#C8C8C8',
                        fontFamily: 'GilroyMedium',
                        fontSize: fs(9),
                        textAlign: 'center',
                      }}
                    >
                      1
                    </Text>
                  </Pressable>
                </View>
              </View>
            )
          }}
        ></FlatList>
      </ScrollView>
    </View>
  )
}

export default Home
