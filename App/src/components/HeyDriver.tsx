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
        Du är uppkopplad
        {'\n'}
        mot lastbil {truck}.
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
        width: 30,
        height: 30,
        marginRight: 10,
    },
    textUsername: {
        color: colors.textPrimary,
        fontFamily: 'InterBold',
        fontSize: 17,
        marginTop: 10,
    },


    textTruck: {
        color: colors.textSecondary,
        fontFamily: 'InterSemiBold',
        fontSize: 15,
        marginTop: 10,
    }
})