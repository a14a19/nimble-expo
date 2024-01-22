import { View, Text, TextInput } from "react-native"
import React from "react"
import { Controller } from "react-hook-form"

const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
  keyboardType = "default",
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View className="w-full my-1">
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              keyboardType={keyboardType}
              className={`px-3 border border-slate-300 bg-neutral-100 rounded-md h-10 w-full ${
                error && "border-red-400"
              }`}
            />
          </View>
          {error && (
            <Text style={{ color: "red", alignSelf: "stretch" }}>
              {error.message || "Error"}
            </Text>
          )}
        </>
      )}
    />
  )
}

export default CustomInput
