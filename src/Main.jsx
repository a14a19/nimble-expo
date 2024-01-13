import { useSelector } from "react-redux"

import StackScreens from "./screens/StackScreens"
import { SafeAreaView, Text, View } from "react-native"
import TabScreens from "./tabs/TabScreens";

export default function Main() {

    const { isLoggedIn } = useSelector((store) => store.auth)

    return (
        <>
            {
                isLoggedIn
                    ?
                    <TabScreens />
                    :
                    <StackScreens />
            }
        </>
    )
}

