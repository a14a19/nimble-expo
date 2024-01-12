import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HollowButton({onPress,label,mTop}) {
  return (
    <View>
      <LinearGradient
        onTouchStart={onPress}
        style={[styles.buttonStyle,{ marginTop: mTop }]}
        start={[0, 0]}
        end={[1, 1]}
        location={[0.5, 0.5]}
        colors={['transparent', 'transparent']}

        borderColor="#FF74A6"
        borderWidth={2}
        borderRadius={50}
      >
        <Text style={styles.textStyle}>{label}</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginHorizontal: '6%',
    
  },
  textStyle: {
    color: '#FF74A6',
    fontWeight: 'bold',
    paddingVertical: '4%',
    textAlign: 'center',
  },
});
