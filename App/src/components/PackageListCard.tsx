import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../styles/colors";

const PackageListCard = ({
  packageItem,
}: {
  packageItem: { package_id: number; package_name: string };
}) => {
  return (
    <View style={styles.listItem}>
      <Text>{packageItem.package_name}</Text>
    </View>
  );
};

export default PackageListCard;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 12,
    margin: 5,
    borderColor: colors.textPrimary,
  },
});
