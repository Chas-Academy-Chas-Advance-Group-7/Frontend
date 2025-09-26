import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../styles/colors'

type WarningLevel = 'none' | 'caution' | 'danger';

interface WarningCardProps {
  warningLevel: WarningLevel;
  message: string;
}

const WarningCard: React.FC<WarningCardProps> = ({ warningLevel, message }) => {
  const getColorsForLevel = (level: WarningLevel) => {
    switch (level) {
      case 'none':
        return { backgroundColor: colors.greenCard, borderColor: colors.greenBorder };
      case 'caution':
        return { backgroundColor: colors.yellowCard, borderColor: colors.yellowBorder };  
      case 'danger':
        return { backgroundColor: colors.redCard, borderColor: colors.redBorder };
      default:
        return { backgroundColor: colors.greenCard, borderColor: colors.greenBorder };
    }
  };

  // const getIcon = (level: WarningLevel) => {
  //   switch (level) {
  //     case 'none':  
  //     return require('../assets/Check_circle.png');
  //     case 'caution':
  //       return require('../assets/Alert_circle_yellow.png');
  //       case 'danger':
  //       return require('../assets/Alert_circle_red.png');
  //   }
  // };  

  const cardColors = getColorsForLevel(warningLevel);
  // const icon = getIcon(warningLevel);

  return (
    <View style={[styles.card, cardColors]}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default WarningCard

const styles = StyleSheet.create({
    card: {
        height: 193,
        width: '70%',
        borderRadius: 20,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: colors.greenBorder,
    },
    message: {  
        color: colors.textSecondary,
        fontFamily: 'InterSemiBold',  
        fontSize: 16,
        marginTop: 10,
    },
})