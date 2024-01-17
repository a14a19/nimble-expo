import { Text, View, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Pressable, TouchableWithoutFeedback } from 'react-native';

import GradientButton from "../utils/GradientButton"
import { useNavigation } from "@react-navigation/native"
import { useMemo, useState } from "react";

function LookingToFindScreen() {
    const navigation = useNavigation();



    const radioButtons = useMemo(() => ([
        {
            id: '1',
            label: 'A relationship',
            value: 'relationship'
        },
        {
            id: '2',
            label: 'Something casual',
            value: 'casual'
        },
        {
            id: '3',
            label: 'Unsure',
            value: 'unsure'
        },
        {
            id: '4',
            label: 'Prefer not to say',
            value: 'undisclosed'
        }
    ]), []);
    const [selectedId, setSelectedId] = useState();
    return (
        <SafeAreaView>
            <View className="flex flex-col h-full justify-between">
                <View>
                    <Text className="flex text-left font-bold text-2xl pl-[4%] pb-[6%]">What are you hoping to Find?</Text>
                    <Text className="flex text-left px-[4%] pb-[14%]">This will help us to assist you to find a date Faster.</Text>

                    <View style={styles.main}>
                        <TouchableOpacity>
                            <View>
                                <View></View>
                                <Text style={styles.radioText}>Hello</Text>

                            </View>


                        </TouchableOpacity>


                    </View>

                </View>





                <View className="flex text-left px-[4%] pb-[14%] ">

                    <View className=" mt-16">
                        <GradientButton pVertical={`0%`}
                            onPress={() => {
                                navigation.navigate("Preferences");
                            }}
                            label="Continue"
                            pVerticalBtn={`4%`}
                        />
                    </View>
                </View>

            </View>

        </SafeAreaView>

    )

}

export default LookingToFindScreen;

const styles = StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})