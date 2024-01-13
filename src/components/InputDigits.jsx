import { TextInput, View } from "react-native";

export default function InputDigits({}) {

    return (
        <View>
            <TextInput className="w-8 h-10 border border-gray-400 rounded-lg pb-0.5 text-center text-2xl" caretHidden={false} keyboardType="numeric" maxLength={1} ref={input1} onChange={(e) => handleChangeInput(e, "input2")} value={inputs.input1} />
        </View>
    )
}

