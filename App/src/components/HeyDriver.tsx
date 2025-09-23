import { StyleSheet, Image, View, Text } from 'react-native'
import React from 'react'
import { colors } from '../styles/colors'

const HeyDriver = ({ username, truck }: { username: string; truck: string }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/User.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.textUsername}>
        Hej, förare {username}! 
      </Text>
      <Text style={styles.textTruck}>
        Du är uppkopplad mot lastbil {truck}
      </Text>
    </View>
  );
}

export default HeyDriver

const styles = StyleSheet.create({
    container: {
        position: "relative",
        top: 10,
        alignItems: "center", 
    }, 
    image: {
        width: 50, 
        height: 50,
        marginRight: 10,
    },
    textUsername: {
        color: colors.textPrimary,
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: 'bold',
    },


    textTruck: {
        color: colors.textSecondary,
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'bold',
    }
})