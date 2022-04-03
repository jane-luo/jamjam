import { Text, View, StyleSheet, Image, Button } from 'react-native';
import * as React from 'react';
import chargingcar from '../assets/chargingcar.png';
import ChargingButtons from './ChargingButton.js';
import Header from './Header.js';

export default function ChargingStationInfo() {
  return (
    <View style={{backgroundColor: '#000000', flex: 1, paddingTop: 45}}>
      <Text style={styles.setBaseColor, {textAlign: 'center', fontSize: 24, color: '#FFFFFF'}}>
        Blink Charging Station
      </Text>

      <View style={{paddingTop: 15}}>
        <Text style={styles.baseText, {textAlign: 'center', fontSize: 15, color: '#FFFFFF'}}>
          0.1 Miles
        </Text>
      </View>

      <View style={styles.container}>
        <Image source={chargingcar} style={{ width: 233, height: 236}} /> 
      </View>

      <ChargingButtons/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  }
});
