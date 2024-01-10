import { Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Welcome to Login</Text>
            <Pressable
                onPress={() => {
                    navigation.navigate("SignIn");
                }}

                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                    },
                    styles.wrapperCustom,
                ]}>
                {({ pressed }) => (
                    <Text style={styles.text} >{pressed ? 'SignIn Form!' : 'First Time User? Sign In!'}</Text>
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