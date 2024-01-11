import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function GradientButton(props) {
  return (
    <View>
      <LinearGradient
        onTouchStart={props.onPress}
        style={styles.buttonStyle}
        start={[0, 0]}
        end={[1, 1]}
        location={[0.5, 0.5]}
        colors={['#FF74A6', '#E167FF']}>
        <Text style={styles.textStyle}>{props.label}</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
    buttonStyle: {
        marginHorizontal: "6%",
        borderRadius: "25%",
        marginTop: "28%",
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        paddingVertical: "4%",
        textAlign: "center",
    },
});