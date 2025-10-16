import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import PackageListCard from "./PackageListCard";
import users from "../assets/users.json";
import { colors } from "../styles/colors";

interface PackageListProps {
  route: string;
  role: string;
}

interface Package {
  package_id: number;
  package_name: string;
  package_temp: number;
  package_humidity: number;
  package_latitude?: number;
  package_longitude?: number;
}

const PackageList = ({ route, role }: PackageListProps) => {
  const user = users.find((user) => user.role === role);
  let packages: Package[] = [];

  if (role === "user") {
    if (route === "sending") {
      packages = user?.sending || [];
    } else if (route === "receiving") {
      packages = user?.receiving || [];
    }
  } else if (role === "driver") {
    packages = user?.packages || [];
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {role === "user"
          ? route === "sending"
            ? "Dina utgående paket"
            : "Dina inkommande paket"
          : "Paket att leverera"}
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
