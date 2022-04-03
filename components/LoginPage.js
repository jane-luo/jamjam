import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { TextInput, Button } from 'react-native';

export default function LoginPage() {
  return (
  <View style={{backgroundColor: 'black', flex:1}}>
      <Text style={styles.baseText, {textAlign: "center"}, 
                  {marginTop: 180, marginLeft: 120}}>
        <Text style = {styles.titleText}>
            jamjam
        </Text> 
        </Text>
      <Text style = {styles.baseText}>
        <Text style = {styles.baseText, {textAlign: "center"}}>
            Get Started
        </Text>
      </Text>
    <Text style = {styles.baseText}>
      <Text style = {{marginTop: 20, marginLeft: 500}}>
        Login
      </Text>
    </Text>
    <TextInput style = {styles.boxinput}>   
    </TextInput>
    <Text style = {styles.baseText}>
      <Text style = {{marginTop: 20, marginLeft: 500}}>
        Password
      </Text>
    </Text>
    <TextInput style = {styles.boxinput}>   
    </TextInput>
    <Text style = {styles.baseText}>
      <Text style = {{marginTop: 20, marginLeft: 500}}>
        New user? Create an account.
      </Text>
    </Text>
      <Button title = "Submit" color = "#ffcccb" >
    </Button>
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
    marginTop: -5,
    borderColor: 'white',
    color: 'white'
  },
  button: {
    textAlign: 'center',
    marginVertical: 8,

  },
});