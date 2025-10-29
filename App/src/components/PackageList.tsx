import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import PackageListCard from "./PackageListCard";
import users from "../assets/users.json";
import { colors } from "../styles/colors";
import {
  getSenderPackages,
  getReceiverPackages,
  getSingleReceiverPackage,
} from "../api/api";

interface PackageListProps {
  route: string;
  role: string | null;
  userId: number | null;
}

interface Package {
  package_id?: number;
  package_name?: string;
  package_temp?: number;
  package_humidity?: number;
  package_latitude?: number;
  package_longitude?: number;
  id?: number;
}

const PackageList = ({ route, role, userId }: PackageListProps) => {
  const [packages, setPackages] = useState<Package[]>([]);

  useEffect(() => {
    const fetchPackages = async () => {
      if (!userId) return;

      if (role === "user" && route === "sending") {
        const data = await getSenderPackages(userId);
        if (data) setPackages(data);
      } else if (role === "user" && route === "receiving") {
        const data = await getReceiverPackages(userId);
        if (data) setPackages(data);
      } else if (role === "driver") {
        //För driver eftersom endpoint inte finns
        const driverUser = users.find((u) => u.role === role);
        if (driverUser?.packages) setPackages(driverUser.packages);
      }
    };

    fetchPackages();
  }, [role, route, userId]);

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
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <PackageListCard packageItem={item} route={route} userId={userId} />
        )}
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
