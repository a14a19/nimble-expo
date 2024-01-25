import { useSelector } from "react-redux"
import { View, SafeAreaView, Text, Pressable, ActivityIndicator, Modal } from "react-native";

import StackScreens from "./screens/StackScreens"
import TabScreens from "./tabs/TabScreens";

export default function Main() {

    const { isLoggedIn, isAPIPending } = useSelector((store) => store.auth)

    return (
        <>
            {
                isLoggedIn
                    ?
                    <TabScreens />
                    :
                    <StackScreens />
            }
            {
                isAPIPending &&
                <SafeAreaView>
                    <Modal transparent={true} visible={true}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#00000050" }}>
                            <ActivityIndicator size="large" color="#F21464" />
                        </View>
                    </Modal>
                </SafeAreaView>
            }
        </>
    )
}

