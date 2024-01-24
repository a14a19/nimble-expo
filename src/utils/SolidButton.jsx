import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SolidButton({ onPress, label, mTop, pVertical }) {
  return (
    <View>
      <LinearGradient
        onTouchStart={onPress}
        style={[styles.buttonStyle, { marginTop: mTop }]}
        start={[0, 0]}
        end={[1, 1]}
        location={[0.5, 0.5]}
        colors={["#FF74A6","#FF74A6"]}

        borderColor="#FF74A6"
        borderWidth={2}
        borderRadius={50}
      >
        <Text style={[styles.textStyle, { paddingVertical: pVertical, fontFamily: "mont-semibold" }]}>{label}</Text>
      </LinearGradient>
    </View >
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginHorizontal: '4%',
  },
  textStyle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
