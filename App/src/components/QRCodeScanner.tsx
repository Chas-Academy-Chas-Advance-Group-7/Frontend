import { StyleSheet,View } from "react-native";
import React from "react";
import { CameraView, BarcodeScanningResult } from "expo-camera";
import { colors } from "../styles/colors";

export interface QRData {
    id?: string;
    raw?: string;
}

export interface QRCodeScannerProps {
    onScan: (data: QRData) => void;
}

const QRCodeScanner: React.FC<QRCodeScannerProps> = ({ onScan}) => {
    const handleRead = (data: string) => {
        let parsed: QRData;
        try {
            parsed = JSON.parse(data);
        } catch {
            parsed = { raw: data };
        }
        onScan(parsed);
    }
    
const handleBarcodeScanned = ({ data }: BarcodeScanningResult) => {
    if (!data) return;
    handleRead(data);
  };
    
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
        onBarcodeScanned={handleBarcodeScanned}
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
        height: '50%'
    },
});                

export default QRCodeScanner;


