import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import PackageListCard from "./PackageListCard";
import users from "../assets/users.json";
import { colors } from "../styles/colors";

const user = users.find((user) => user.role === "user");
const packages = user?.packages || [];

const PackageList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dina paket</Text>
      <FlatList
        data={packages}
        scrollEnabled={false}
        keyExtractor={(item) => item.package_id.toString()}
        renderItem={({ item }) => <PackageListCard packageItem={item} />}
      />
    </View>
  );
};

export default PackageList;

const styles = StyleSheet.create({
  container: {
    width: 300,
    marginVertical: 50,
  },
  title: {
    fontFamily: "InterSemiBold",
    fontSize: 18,
    marginBottom: 15,
    color: colors.textPrimary,
    textAlign: "center",
  },
});
