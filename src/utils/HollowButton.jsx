import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HollowButton(props) {
  return (
    <View>
      <LinearGradient
        onTouchStart={props.onPress}
        style={styles.buttonStyle}
        start={[0, 0]}
        end={[1, 1]}
        location={[0.5, 0.5]}
        colors={['transparent', 'transparent']}

        borderColor="#FF74A6"
        borderWidth={2}
        borderRadius={25}
      >
        <Text style={styles.textStyle}>{props.label}</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginHorizontal: '6%',
    marginTop: '2%',
  },
  textStyle: {
    color: '#FF74A6',
    fontWeight: 'bold',
    paddingVertical: '4%',
    textAlign: 'center',
  },
});
