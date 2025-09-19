import { StyleSheet, Image, View, Text } from 'react-native'
import React from 'react'
import { colors } from '../styles/colors'

const Header = () => {
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

export default Header

const styles = StyleSheet.create({
    container: {
      position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        paddingTop: 40,
        paddingBottom: 12,
        elevation: 4,
        alignItems: "center", 
        justifyContent: "center",

    }, 
    image: {
        width: 80, 
        height: 80,
        marginRight: 10,
    },
    text: {
        color: colors.textPrimary,
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: 'bold',
    }
})