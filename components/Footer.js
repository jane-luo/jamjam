import React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import App from '../App';
import car from '../assets/car.png';
import charge from '../assets/charge.png';
import driving from '../assets/driving.png';
import settings from '../assets/settings.png';

export default class Footer extends React.Component {
  render() {
    return (
      <View style={styles.container, 
      {flexDirection:'row', padding: 10, paddingTop: 20, 
      backgroundColor: '#E84E4E', justifyContent: 'space-evenly'}}>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
      <Image source={car} style={{ width: 45, height: 45}} /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() =>{alert("you clicked me")}}>
      <Image source={charge} style={{ width: 45, height: 45}} /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
      <Image source={driving} style={{ width: 45, height: 45}} /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
      <Image source={settings} style={{ width: 45, height: 45}} /> 
        </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    marginBottom: 5,
  },
});