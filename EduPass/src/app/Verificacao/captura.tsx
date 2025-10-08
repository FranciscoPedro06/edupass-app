import React, { useRef, useState } from 'react';
import { Button, StyleSheet, View, Image } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';

export default function CapturaSelfie() {
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState<string | null>(null);
  const cameraRef = useRef<CameraView>(null);

  if (!permission?.granted) {
    return <Button title="Permitir acesso à câmera" onPress={requestPermission} />;
  }

  const handleCapture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhoto(photo.uri);

      const result = await FaceDetector.detectFacesAsync(photo.uri, {
        mode: FaceDetector.FaceDetectorMode.fast,
        detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,
        runClassifications: FaceDetector.FaceDetectorClassifications.all,
      });

      console.log('Rostos detectados:', result.faces.length);
    }
  };

  return (
    <View style={styles.container}>
      {!photo ? (
        <>
          <CameraView ref={cameraRef} style={styles.camera} facing="front" />
          <Button title="Capturar" onPress={handleCapture} />
        </>
      ) : (
        <>
          <Image source={{ uri: photo }} style={styles.preview} />
          <Button title="Refazer" onPress={() => setPhoto(null)} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', backgroundColor: '#000' },
  camera: { flex: 1 },
  preview: { flex: 1, resizeMode: 'contain' },
});
