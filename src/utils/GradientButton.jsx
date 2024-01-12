import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function GradientButton({ onPress, label, mTop, pVertical, pVerticalBtn }) {
  return (
    <View>
      <LinearGradient
        onTouchStart={onPress}
        style={[styles.buttonStyle, { marginTop: mTop, paddingVertical: pVerticalBtn }]}
        start={[0, 0]}
        end={[1, 1]}
        location={[0.5, 0.5]}
        colors={['#FF74A6', '#E167FF']}

        borderRadius={50}
      >
        <Text style={[styles.textStyle, { paddingVertical: pVertical }]}>{label}</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginHorizontal: "6%",
    borderRadius: 50,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: "center",
  },
});