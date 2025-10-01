import { StyleSheet, Text, View, Modal, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { colors } from "../styles/colors";
import GradientButton from "./GradientButton";

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
      <Modal transparent visible={modalVisible} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalInfo}>
              <Image
                source={require("../assets/package_icon.png")}
                style={styles.modalImage}
              />
              <Text style={styles.modalTitle}>{packageItem.package_name}</Text>
              <Text style={styles.modalText}>
                Temperatur: {packageItem.package_temp}°C
              </Text>
              <Text style={styles.modalText}>
                Fuktighet: {packageItem.package_humidity}%
              </Text>
            </View>
            <GradientButton
              colors={[colors.buttonGradientLeft, colors.buttonGradientRight]}
              title="Markera som levererad"
              onPress={() => setModalVisible(false)}
            />
            <GradientButton
              colors={[colors.buttonColorGrey, colors.buttonColorGrey]}
              title="Gå tillbaka"
              onPress={() => setModalVisible(false)}
              style={{ marginTop: 10 }}
            />
          </View>
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
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalInfo: {
    padding: 10,
    marginBottom: 10,
  },
  modalImage: {
    height: 35,
    width: 35,
    alignSelf: "center",
    marginVertical: 15,
  },
  modalTitle: {
    fontFamily: "InterBold",
    fontSize: 20,
    marginBottom: 20,
    marginTop: 20,
    color: colors.textPrimary,
    textAlign: "center",
  },
  modalText: {
    fontFamily: "InterRegular",
    fontSize: 16,
    marginBottom: 10,
    color: colors.textPrimary,
    textAlign: "center",
  },
});
