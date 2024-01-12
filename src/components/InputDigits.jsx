import { useRef, useState } from "react";
import { Keyboard, TextInput, View } from "react-native"

function InputDigits({ outPut }) {

    const [inputs, setInputs] = useState({ input1: "", input2: "", input3: "", input4: "" })

    const input1 = useRef();
    const input2 = useRef();
    const input3 = useRef();
    const input4 = useRef();

    const handleChangeInput = (e, input) => {
        e.preventDefault()
        console.log(input)

        if (input === "input2") {
            setInputs({ ...inputs, input1: e.nativeEvent.text.trim() })
            if (e.nativeEvent.text.trim() !== "") {
                input2.current.focus()
            }
        } else if (input === "input3") {
            setInputs({ ...inputs, input2: e.nativeEvent.text.trim() })
            if (e.nativeEvent.text.trim() !== "") {
                input3.current.focus()
            }
        } else if (input === "input4") {
            setInputs({ ...inputs, input3: e.nativeEvent.text.trim() })
            if (e.nativeEvent.text.trim() !== "") {
                input4.current.focus()
            }
        } else if (input === "input1") {
            setInputs({ ...inputs, input4: e.nativeEvent.text.trim() })
            if (e.nativeEvent.text.trim() !== "") {
                Keyboard.dismiss()
            }
        }
        
        console.log(e.nativeEvent.text, inputs)
        outPut(+`${inputs.input1}${inputs.input2}${inputs.input3}${inputs.input4}`)
    }

    return (
        <View className="flex flex-row w-1/2 justify-between mx-auto">
            <TextInput className="w-8 h-10 border border-gray-400 rounded-lg pb-0.5 text-center text-2xl" caretHidden={false} keyboardType="numeric" maxLength={1} ref={input1} onChange={(e) => handleChangeInput(e, "input2")} value={inputs.input1} />
            <TextInput className="w-8 h-10 border border-gray-400 rounded-lg pb-0.5 text-center text-2xl" caretHidden={false} keyboardType="numeric" maxLength={1} ref={input2} onChange={(e) => handleChangeInput(e, "input3")} value={inputs.input2} />
            <TextInput className="w-8 h-10 border border-gray-400 rounded-lg pb-0.5 text-center text-2xl" caretHidden={false} keyboardType="numeric" maxLength={1} ref={input3} onChange={(e) => handleChangeInput(e, "input4")} value={inputs.input3} />
            <TextInput className="w-8 h-10 border border-gray-400 rounded-lg pb-0.5 text-center text-2xl" caretHidden={false} keyboardType="numeric" maxLength={1} ref={input4} onChange={(e) => handleChangeInput(e, "input1")} value={inputs.input4} />
        </View>
    )
}

export default InputDigits