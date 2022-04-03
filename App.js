import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// You can import from local files
import ChargingStationInfo from './components/ChargingStationInfo';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import Map from './components/Map';
import DrivingStatus from './components/DrivingStatus';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <LoginPage/>

    // Driving Status Tab
    // <Header />
    // <DrivingStatus />
    // <Footer />

    // Charging Station Tab
    // <Header />
    // <ChargingStationInfo />
    // <Footer />

    // Charging Station Map Tab
    // <Header />
    // <Map />
    // <Footer />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
