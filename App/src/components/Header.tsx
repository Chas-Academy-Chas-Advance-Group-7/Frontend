import { StyleSheet, Image, View, Text } from 'react-native'
import React from 'react'
import { colors } from '../styles/colors'

const HeroImage = () => {
  return (
    <View style={styles.container}>
      <Image
      source={require("../assets/truck_logo.png")}
      style={styles.image}
      resizeMode="cover"/>
      <Text
      style={styles.text}>
        BlueRoute
      </Text>
    </View>
  )
}

export default HeroImage

const styles = StyleSheet.create({
    container: {
        width: "100%", 
        height: 250
    }, 
    image: {
        width: "100%", 
        height: "100%"
    },
    text: {
        color: colors.textPrimary,
    }
})