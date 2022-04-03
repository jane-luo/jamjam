import * as React from 'react';
import { Text, View, StyleSheet, Image, Icon } from 'react-native';
import speedometer from '../assets/speedometer.png';
import rater from '../assets/rater.png';
import rater1 from '../assets/rater1.png';
import circle from '../assets/circle.png';

export default function DrivingStatus() {
  return (
  <View style={{backgroundColor: 'black', flex:1}}>
    <Text style={styles.baseText, {textAlign: "center"}, 
                  {marginTop: 15, marginLeft: 110}}>
        <Text style = {styles.baseText}>
            How are you driving?
        </Text> 
        </Text>
    <View style={styles.image}>
        <Image source={speedometer} style={{ width: 212, height: 162}} /> 
    </View>
    <Text style={styles.baseText, {textAlign: "center"}, 
                  {marginTop: -10, marginLeft: 20}}>
        <Text style = {styles.baseText}>
            Hard Braking
        </Text> 
        </Text>
    <View style={styles.image, {marginTop: 6, marginLeft: 30}}>
        <Image source={rater} style={{ width: 100, height: 60}} /> 
    </View>
    <Text style={styles.baseText1, {textAlign: "center"}, 
                  {marginTop: 0, marginLeft: 50}}>
        <Text style = {styles.baseText1}>
            good !
        </Text> 
        </Text>
    <Text style={styles.baseText, {textAlign: "center"}, 
                  {marginTop: -110, marginLeft: 250}}>
        <Text style = {styles.baseText}>
            Acceleration
        </Text> 
        </Text>
    <View style={styles.image, {marginTop: 5, marginLeft: 250}}>
        <Image source={rater1} style={{ width: 100, height: 55}} /> 
    </View>
    <Text style={styles.baseText2, {textAlign: "center"}, 
                  {marginTop: 5, marginLeft: 200}}>
        <Text style = {styles.baseText2}>
            Needs Improvement
        </Text> 
        </Text>
        <Text style={styles.baseText, {textAlign: "center"}, 
                  {marginTop: 20, marginLeft: 80}}>
        <Text style = {styles.baseText}>
          Distraction Free Driving Time
        </Text> 
        </Text>
    <View style={styles.image, {marginTop: 10, marginLeft: 100}}>
        <Image source={circle} style={{ width: 200, height: 200}} /> 
        
    </View>
    <Text style={styles.baseText3, {textAlign: "center"}, 
                  {marginTop: -120, marginLeft: 170}}>
        <Text style = {styles.baseText3}>
         97%
        </Text> 
        </Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#ecf0f1' ,
    padding: 24,
  },
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white'
  },
  baseText: {
    fontSize: 20,
    fontWeight: '', 
    color: 'white',
    padding: 20
  },
  boxinput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    marginTop: -5,baseText: {
    fontSize: 20,
    fontWeight: '', 
    color: 'white',
    padding: 20
    
  },
    borderColor: 'white',
    color: 'white'
  },
  button: {
    textAlign: 'center',
    marginVertical: 8,
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  baseText1: {
    fontSize: 20,
    fontWeight: '', 
    color: '#50C878',
    padding: 20
  },
  baseText2: {
    fontSize: 20,
    fontWeight: '', 
    color: '#FFF380',
    padding: 20  
  },
  baseText3: {
    fontSize: 30,
    fontWeight: '', 
    color: '#50C878',
    padding: 20
  },
});