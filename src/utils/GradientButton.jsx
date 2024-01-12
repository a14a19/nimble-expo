import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function GradientButton({onPress,label,mTop}) {
  return (
    <View>
      <LinearGradient
        onTouchStart={onPress}
        style={[styles.buttonStyle,{marginTop:mTop}]}
        start={[0, 0]}
        end={[1, 1]}
        location={[0.5, 0.5]}
        colors={['#FF74A6', '#E167FF']}>
        <Text style={styles.textStyle}>{label}</Text>
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
        paddingVertical: "4%",
        textAlign: "center",
    },
});