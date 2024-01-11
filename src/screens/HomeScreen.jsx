import { Text, View, Pressable, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native-web';

export default function HomeScreen() {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <View className="flex justify-center items-center bg-red-400 text-white h-screen">
                <Text>Open up Nimble.js to start working on your app!</Text>
                <Pressable
                    onPress={() => {
                        navigation.navigate("Onboarding");
                    }}

                    className="bg-gradient-to-r from-pink-400 to-fuchsia-400 text-black"
                >
                    {({ pressed }) => (
                        <Text >{pressed ? 'Pressed!' : 'Press Me'}</Text>
                    )}
                </Pressable>
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    )
}