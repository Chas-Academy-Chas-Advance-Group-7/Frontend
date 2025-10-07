import { StyleSheet, Text, View, Modal, Pressable, Image } from "react-native";
import { useState } from "react";
import { colors } from "../styles/colors";
import PackageModal from "./PackageModal";

const PackageListCard = ({
  packageItem,
}: {
  packageItem: {
    package_id: number;
    package_name: string;
    package_temp: number;
    package_humidity: number;
  };
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <Pressable style={styles.listItem} onPress={() => setModalVisible(true)}>
      <Text style={styles.listItemText}>{packageItem.package_name}</Text>
      <PackageModal
      packageItem={packageItem}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      />
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
  listItemText: {
    fontFamily: "InterRegular",
    fontSize: 16,
  },
});
