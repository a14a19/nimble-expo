import { Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'react-native-web';

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <Text>Welcome to Login</Text>
            <Pressable
                onPress={() => {
                    navigation.navigate("Login");
                }}
                
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                    },
                    styles.wrapperCustom,
                ]}>
                {({ pressed }) => (
                    <Text style={styles.text} >{pressed ? 'Pressed!' : 'Press Me'}</Text>
                )}
            </Pressable>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapperCustom: {
        backgroundColor: "#000",
    },
    text: {
        color: "#fff"
    }
});