import { Pressable, StyleSheet, Text, View, TextInput, Button } from 'react-native';




function SignInScreen() {

    return (
        <View className='mt-12  bg-transparent' >
            <Text className='mt-24 mx-2 text-xl font-extrabold  mb-6 ' >Sign In</Text>

            <Text className="mx-2 text-lg font-semibold">Enter your Full Name</Text>

            <TextInput
                className="border focus:border-green-400 border-slate-300 bg-grey-500 h-9 rounded-lg w-auto mx-2"
                placeholder=""
            />
            <Text className="mx-2 text-lg font-semibold">Enter Your Email Address</Text>

            <TextInput
                className="border border-slate-300 bg-grey-500 h-9 rounded-lg w-auto mx-2"
                type='email'
                placeholder=""
            />
            <View className="flex justify-end mt-8">
                <Button
                    style={styles.forgot}

                    title="Forgot Password?"

                    onPress={() => {
                        // Forgot pasword Logic logic here
                    }}
                />


            </View>
            <View className=" mt-16">
                <Button
                    // className="border rounded-xl bg-slate-500 text-black"
                    // style={styles.signIn} 

                    title="Sign Up"
                    onPress={() => {
                        // sign-up logic here
                    }}
                />

            </View>




            <Button
                className="border rounded-xl bg-slate-500 text-black"
                title="Dont have and Account? Sign Up here"
                onPress={() => {
                    // sign-up logic here
                }}
            />






        </View>
    )

}
export default SignInScreen;


const styles = StyleSheet.create({


    forgot: {
        alignSelf: 'flex-start',
        // borderColor: 'gray',
        // borderWidth: 1,
        // marginBottom: 10,
        // padding: 10,
        // width: '80%',
    },
    signIn: {

    }
});