import { StyleSheet, Text, View, Modal } from 'react-native'
import React, { useState } from 'react'
import { Overlay } from 'react-native-maps';
import GradientButton from './GradientButton';
import { colors } from '../styles/colors';

interface AlertModalProps {
    visible: boolean;
    data: Record<string, any> | null;
    onClose: () => void;
}

const AlertModal: React.FC<AlertModalProps> = ({ visible, data, onClose }) => {
    const [modalVisible, setModalVisible] = useState(false);

  return (
    <Modal visible={visible} animationType="fade" onRequestClose={onClose}>
     <View style={styles.overlay}>
        <View style={styles.box}>
            <Text 
            style={styles.title}>Du har skannat:
            </Text>
            <Text
            style={styles.message}>{data?.packageId}
            </Text>
            <GradientButton
             colors={[colors.buttonGradientLeft, colors.buttonGradientRight]}
             title="Stäng"
             onPress={onClose}
            />
       </View>
     </View>
    </Modal>
  )
}

export default AlertModal

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: "green",   
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'InterBold',
    },
    message: {
        fontSize: 16,   
        fontFamily: 'InterRegular',
    }
})