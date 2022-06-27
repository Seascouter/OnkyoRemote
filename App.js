import React, { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

function speakerAToggle() {

}

function speakerBToggle() {

}

const SpeakerButton = (props) => {
  const [on, setOn] = useState(true);
  const [onS, setOnS] = useState([styles.speakerBarItem, styles.speakerBarUP])

  return (
    <Pressable onPress={() => {
      if (on == true) {
        setOn(false);
        setOnS([styles.speakerBarItem, styles.speakerBarP]);
        console.log(`${props.name} Off`)
      } else {
        setOn(true);
        setOnS([styles.speakerBarItem, styles.speakerBarUP]);
        console.log(`${props.name} On`)
      }
    }} style={onS}>
      <Text style={styles.speakerBarItemText}>{on ? props.name : "Off"}</Text>
    </Pressable>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titlebar}>
        <Text style={styles.titlebarTitle}>Onkyo Remote Control</Text>
      </View>
      <View style={styles.speakerbar}>
        <SpeakerButton name="Speaker A" />
        <SpeakerButton name="Speaker B" />
      </View>
      <View style={styles.else}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titlebar: {
    flex: 1.5,
    backgroundColor: '#95e386',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titlebarTitle: {
    color: '#fff',
    paddingTop: 40,
    fontSize: 30,
    fontWeight: 'bold',
  },
  speakerbar: {
    flex: 2,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  speakerBarItem: {
    margin: 20,
    borderWidth: 4,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    
  },
  speakerBarItemText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  speakerBarUP: {
    backgroundColor: '#95e286',
    borderColor: '#4e7a48',
  },
  speakerBarP: {
    backgroundColor: '#d65151',
    borderColor: '#a82c2c',
  },
  else: {
    flex: 6.5,
  },
  

});
