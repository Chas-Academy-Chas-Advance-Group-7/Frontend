import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import PackageListCard from "./PackageListCard";
import users from "../assets/users.json";
import { colors } from "../styles/colors";

const PackageList = ({ route }: { route: string }) => {
  const user = users.find((user) => user.role === "user");
  let packages = [];
  if (route === "sending") {
    packages = user?.sending || [];
  } else {
    packages = user?.receiving || [];
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {route === "sending" ? "Dina utgående paket" : "Dina inkommande paket"}
      </Text>
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
    marginVertical: 40,
  },
  title: {
    fontFamily: "InterSemiBold",
    fontSize: 18,
    marginBottom: 15,
    color: colors.textPrimary,
    textAlign: "center",
  },
});
