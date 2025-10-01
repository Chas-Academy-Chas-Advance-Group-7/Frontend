import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import { colors } from "../styles/colors";

const PackageListCard = ({
  packageItem,
}: {
  packageItem: {
    package_id: number;
    package_name: string;
    package_temp: number;
  };
}) => {
  const [modalVisible, setModalVisible] = useState<boolean | undefined>(false);

  return (
    <Pressable style={styles.listItem} onPress={() => setModalVisible(true)}>
      <Text style={styles.listItemText}>{packageItem.package_name}</Text>
      <Modal transparent={false} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <Text>{packageItem.package_temp}</Text>
          <Pressable onPress={() => setModalVisible(false)}>
            <Text>Gå tillbaka</Text>
          </Pressable>
        </View>
      </Modal>
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
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
