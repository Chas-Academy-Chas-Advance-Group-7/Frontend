import { StyleSheet, Text, Pressable, Animated } from "react-native";
import { useState } from "react";
import { colors } from "../styles/colors";
import PackageModal from "./PackageModal";
import useAnimation from "../hooks/useAnimation";

const PackageListCard = ({
  packageItem,
}: {
  packageItem: {
    package_id: number;
    package_name: string;
    package_temp: number;
    package_humidity: number;
    package_delivery_address?: string;
  };
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const { opacityValue, fadeIn, fadeOut } = useAnimation();

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
        <Text style={styles.listItemName}>{packageItem.package_name}</Text>
        <Text style={styles.listItemAddress}>{packageItem.package_delivery_address}</Text>
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
