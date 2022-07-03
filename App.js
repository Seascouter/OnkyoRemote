import React, { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

const VolumeControl = (props) => {
  const [level, setLevel] = useState(35);

  return(
    <View style={styles.volumebar}>
      <Pressable style={styles.volumebarButton} onPress={() => {
        console.log(`decrease to ${level-1}`)
        setLevel(level-1);
        
      }}>
        <Text style={styles.volumebarButtonText}>-</Text>
      </Pressable>
      <Text style={styles.volumebarLabel}>Volume: {level}</Text>
      <Pressable style={styles.volumebarButton} onPress={() => {
        console.log(`increase to ${level+1}`);
        setLevel(level+1);
        
      }}>
        <Text style={styles.volumebarButtonText}>+</Text>
      </Pressable>
    </View>
    
  )
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

const PowerButton = (props) => {
  const [isOn, setIsOn] = useState(false);
  const [isOnS, setIsOnS] = useState([styles.powerbarButton, styles.powerbarButtonP]);

  return (
    <Pressable onPress={() => {
      if (isOn == true) {
        setIsOn(false);
        setIsOnS([styles.powerbarButton, styles.powerbarButtonP]);
        console.log("Off")
      } else {
        setIsOn(true);
        setIsOnS([styles.powerbarButton, styles.powerbarButtonUP]);
        console.log("On")
      }
    }} style={isOnS}>
      <Text style={styles.powerbarButtonText}>{isOn ? "On" : "Off"}</Text>
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
      <VolumeControl />
      <View style={styles.space}></View>
      <View style={styles.powerbar}>
        <PowerButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c2c7c1',
  },
  titlebar: {
    flex: 1.5,
    backgroundColor: '#77b56b',
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
  volumebar: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 4,
    borderRadius: 25,
    borderColor: '#4e524e',
    backgroundColor: '#7c807c',
    marginRight: 20,
    marginLeft: 20,
    marginTop: 30,
  },
  volumebarButton: {
    width: 90,
    height: 60,
    borderWidth: 4,
    borderRadius: 25,
    borderColor: '#4e7a48',
    backgroundColor: '#95e286',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
  volumebarButtonText: {
    color: '#fff',
    fontSize: 45,
    fontWeight: 'bold',
  },
  volumebarLabel: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  space: {
    flex: 5.5,
  },
  powerbar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'left',
    flexDirection: 'row',
    marginBottom: 50,
    marginLeft: 30,
  },
  powerbarButton: {
    borderWidth: 4,
    borderRadius: 25,
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  powerbarButtonUP: {
    backgroundColor: '#95e286',
    borderColor: '#4e7a48'
  },
  powerbarButtonP: {
    backgroundColor: '#d65151',
    borderColor: '#a82c2c',
  },
  powerbarButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  

});
