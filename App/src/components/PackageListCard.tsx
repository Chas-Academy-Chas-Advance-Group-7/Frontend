import { StyleSheet, Text, Pressable, Animated } from "react-native";
import { useState, useEffect } from "react";
import { colors } from "../styles/colors";
import PackageModal from "./PackageModal";
import useAnimation from "../hooks/useAnimation";
import { useUser } from "../../context/UserContext";
import { getSingleReceiverPackage } from "../api/api";

interface SinglePackage {
  sender_name?: string;
}

const PackageListCard = ({
  packageItem,
  route,
  userId,
}: {
  packageItem: {
    package_id?: number;
    package_name?: string;
    package_temp?: number;
    package_humidity?: number;
    package_latitude?: number;
    package_longitude?: number;
    id?: number;
  };
  route: string;
  userId: number | null;
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [singlePackage, setSinglePackage] = useState<SinglePackage[]>([]);
  const { opacityValue, fadeIn, fadeOut } = useAnimation();
  const { role } = useUser();

  useEffect(() => {
    const fetchSinglePackage = async () => {
      if (route === "receiving") {
        let packageId;
        if (role === "user") {
          packageId = packageItem.id;
        } else {
          packageId = packageItem.package_id;
        }
        const singlePackage = await getSingleReceiverPackage(userId, packageId);
        if (singlePackage) setSinglePackage(singlePackage);
        console.log(singlePackage);
      } else return;
    };
    fetchSinglePackage();
  }, [route, role, userId, packageItem]);

  return (
    <Pressable
      onPress={() => setModalVisible(true)}
      onPressIn={fadeIn}
      onPressOut={fadeOut}
    >
      <Animated.View
        style={[
          styles.listItem,
          {
            opacity: opacityValue.interpolate({
              inputRange: [0, 0.5],
              outputRange: [1, 0.5],
            }),
          },
        ]}
      >
        <Text style={styles.listItemName}>
          {role === "user"
            ? `Paket ${packageItem.id}`
            : `Paket ${packageItem.package_id}`}
        </Text>
        <Text style={styles.listItemAddress}>
          {/* {packageItem.package_delivery_address} */}
          {route === "receiving"
            ? `Avsändare: ${singlePackage[0]?.sender_name ?? "Okänd"}`
            : route === "sending"
            ? "Mottagare: Bla bla"
            : "Address: Bla bla"}
        </Text>
        <PackageModal
          packageItem={packageItem}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </Animated.View>
    </Pressable>
  );
};

export default PackageListCard;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 15,
    margin: 5,
    borderColor: colors.textPrimary,
  },
  listItemName: {
    fontFamily: "InterRegular",
    fontSize: 16,
    color: colors.textPrimary,
  },
  listItemAddress: {
    fontFamily: "InterExtraLight",
    fontSize: 14,
    marginTop: 5,
    color: colors.textSecondary,
  },
});
