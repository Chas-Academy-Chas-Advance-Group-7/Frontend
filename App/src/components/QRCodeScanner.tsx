import { CameraView } from "expo-camera";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../styles/colors";



const QRCodeScanner = () => {
    
  return (
    <View style={styles.container}> 
        <CameraView 
        style={styles.camera} 
        facing='back'
        barcodeScannerSettings={
            { 
                barcodeTypes: ['qr'],
            }
        }
        onBarcodeScanned={
            ({ data }) => {
                console.log('Scanned QR code with data:', data);
            }}
        />
        </View>
        )
        }; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',                            
    },
    camera: {
        borderRadius: 20,
        marginTop: 30,
        marginBottom: 30,
        width: 300,
        height: 200,
        flex: 1,
    },
});                

export default QRCodeScanner;


