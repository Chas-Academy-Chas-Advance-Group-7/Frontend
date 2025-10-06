import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { colors } from "../styles/colors";

type WarningLevel = "none" | "caution" | "danger";

interface WarningCardProps {
  warningLevel: WarningLevel;
  message: string;
}

const WarningCard: React.FC<WarningCardProps> = ({ warningLevel, message }) => {
  const getColorsForLevel = (level: WarningLevel) => {
    switch (level) {
      case "none":
        return {
          backgroundColor: colors.greenCard,
          borderColor: colors.greenBorder,
        };
      case "caution":
        return {
          backgroundColor: colors.yellowCard,
          borderColor: colors.yellowBorder,
        };
      case "danger":
        return {
          backgroundColor: colors.redCard,
          borderColor: colors.redBorder,
        };
      default:
        return {
          backgroundColor: colors.greenCard,
          borderColor: colors.greenBorder,
        };
    }
  };

  const getIcon = (level: WarningLevel) => {
    switch (level) {
      case "none":
        return require("../assets/green_cirkle.png");
      case "caution":
        return require("../assets/yellow_cirkle.png");
      case "danger":
        return require("../assets/red_cirkle.png");
    }
  };

  const cardColors = getColorsForLevel(warningLevel);
  const icon = getIcon(warningLevel);

  return (
    <View style={styles.container}>
      <View style={[styles.card, cardColors]}>
        <Image source={icon} style={[styles.image, icon]} />
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
};

export default WarningCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: "center",
  },
  card: {
    width: 300,
    borderRadius: 20,
    padding: 40,
    paddingBottom: 50,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 25,
    height: 25,
    marginBottom: 15,
  },
  message: {
    color: colors.textSecondary,
    fontFamily: "InterSemiBold",
    fontSize: 16,
    textAlign: "center",
  },
});
