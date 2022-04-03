import { Text, View, StyleSheet, Image, Button } from 'react-native';
import * as React from 'react';
import jamlogo from '../assets/jamlogo.png';

export default function Header() {
  return (
    <>
      <View style={styles.container, 
      {flexDirection:'row', padding: 10, paddingTop: 20, backgroundColor: '#E84E4E'}}>
        <Image source={jamlogo} style={{ width: 64, height: 64}} /> 
        <Text style={{color: '#FFFFFF', marginTop: 10, marginLeft: 15, fontSize: 36}}>jamjam</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'left',
    justifyContent: 'center',
  },
});
