import { useEffect, useRef, useState } from "react";
import { Image, Pressable, SafeAreaView, ScrollView, Text, TouchableOpacity, View, ActivityIndicator, Modal } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { AntDesign, MaterialCommunityIcons, FontAwesome, Ionicons, } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import { Camera, CameraType } from 'expo-camera';
import { LinearGradient } from "expo-linear-gradient";
import { useSelector, useDispatch } from "react-redux";

import GradientButton from "../utils/GradientButton";
import { userProfileUpdateAPI } from "../features/forms/formSlice";

export default function AddPhoto() {

    const dispatch = useDispatch();
    const { passionsCategories, FoodAndDrink, Entertainment, isAPIPending } = useSelector((store) => store.form);

    const camera = useRef(null);
    const navigation = useNavigation();
    const [imageURL, setImageURL] = useState(null);
    const [capturedURL, setCapturedURL] = useState(null);
    const [showCam, setShowCam] = useState(false);
    const [selectedImage, setSelectedImage] = useState({ uri: null, name: null, type: null })
    const [type, setType] = useState(CameraType.front);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    const handleUpload = async () => {
        setShowCam(false);
        setCapturedURL(null);
        let uploadImgResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
        console.log("Upload", uploadImgResult)
        if (!uploadImgResult.canceled) {
            setImageURL(uploadImgResult.assets[0].uri)
            setSelectedImage({
                uri: uploadImgResult.assets[0].uri,
                name: uploadImgResult.assets[0].uri.split("/")[uploadImgResult.assets[0].uri.split("/").length - 1],
                type: `image/${uploadImgResult.assets[0].uri.split(".")[uploadImgResult.assets[0].uri.split(".").length - 1]}`
            })
        }
    }

    const toggleCameraType = () => {
        console.log(type)
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    const handleClick = async () => {
        setImageURL(null);
        setCapturedURL(null);
        console.log("Click", permission)
        if (permission && !permission.granted) {
            setShowCam(false);
            requestPermission();
        }
        if (permission && permission.granted) {
            setShowCam(true);
        }
    }

    const handleCapture = async () => {
        const pic = await camera.current.takePictureAsync()
        if (pic && pic.uri) {
            setShowCam(false);
            setImageURL(null);
            setCapturedURL(pic.uri)
            setSelectedImage({
                uri: pic.uri,
                name: pic.uri.split("/")[pic.uri.split("/").length - 1],
                type: `image/${pic.uri.split(".")[pic.uri.split(".").length - 1]}`
            })
        }
        console.log(pic);


    }

    const handleClose = () => {
        console.log("Close all")
        setShowCam(false);
        setImageURL(null);
        setCapturedURL(null);
    }

    const handleSubmit = () => {
        console.log(selectedImage)
        const imageData = new FormData()

        // const imgJSON = {
        //     avatar: selectedImage
        // }

        imageData.append("profilePic", selectedImage)

        dispatch(userProfileUpdateAPI({
            body: imageData,
            params: { id: "65aa8fb1f561b5078bde1fe0" },
            options: {}
        }))
    }

    return (
        <SafeAreaView>
            {isAPIPending &&
                <Modal transparent={true} visible={true}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#00000050" }}>
                        <ActivityIndicator size="large" color="#F21464" />
                    </View>
                </Modal>
            }
            <ScrollView className="bg-white">
                <View className="flex flex-col h-full justify-between bg-white gap-y-5">
                    <View className="p-4 mt-11">
                        <View className="flex w-full h-1 bg-zinc-300 bg-opacity-25 rounded-md mb-9">
                            <View className="w-full h-1 bg-purple-500 rounded-md" />
                        </View>
                        <Pressable
                            onPress={() => navigation.navigate("Preferences")}
                            className="mb-4"
                        >
                            <AntDesign name="left" size={24} color="black" />
                        </Pressable>
                        <Text className="flex text-left font-semibold text-3xl  pb-[8%]   pt-[4%]" style={{ fontFamily: "mont-semibold" }}>Add Photo</Text>
                        <Text className="flex text-left text-md pb-[1%]" style={{ fontFamily: "mont-med" }}>Add a photo of yourself to continue. Make sure that your face is clearly visible. You can change this later.</Text>
                    </View>

                    <View className="m-5 relative">
                        {
                            imageURL ?
                                <Image source={{ uri: imageURL }} className="w-full h-80 rounded-xl" />
                                :
                                showCam ?
                                    <View className="flex justify-center rounded-xl overflow-hidden">
                                        <Camera type={type} className="flex w-full h-96" ref={camera} ratio={'1:1'}>
                                        </Camera>
                                    </View>
                                    :
                                    capturedURL ?
                                        <Image source={{ uri: capturedURL }} className="w-full h-80 rounded-xl" />
                                        :
                                        <View className="border-2 border-slate-400 border-dashed bg-neutral-100 w-full h-96 rounded-xl">
                                        </View>
                        }
                        {
                            showCam &&
                            <View className="flex flex-row justify-evenly mt-5">
                                <View className="w-12 h-12">
                                    <LinearGradient
                                        onTouchStart={toggleCameraType}
                                        style={[{ padding: 10, width: 60, height: 60, borderRadius: 60 }]}
                                        start={[0, 0]}
                                        end={[1, 1]}
                                        location={[0.5, 0.5]}
                                        colors={['#FF74A6', '#E167FF']}

                                        borderRadius={50}
                                    >
                                        <MaterialCommunityIcons name="camera-flip" size={40} color="white" />
                                    </LinearGradient>
                                </View>
                                <View className="w-12 h-12">
                                    <LinearGradient
                                        onTouchStart={handleCapture}
                                        style={[{ padding: 10, width: 60, height: 60, borderRadius: 60 }]}
                                        start={[0, 0]}
                                        end={[1, 1]}
                                        location={[0.5, 0.5]}
                                        colors={['#FF74A6', '#E167FF']}

                                        borderRadius={50}
                                    >
                                        <FontAwesome name="camera" size={38} color="white" />
                                    </LinearGradient>
                                </View>
                                <View className="flex items-center justify-center" >
                                    <LinearGradient
                                        onTouchStart={handleClose}
                                        style={[{ padding: 4, width: 60, height: 60, borderRadius: 60, display: "flex", alignItems: "center", justifyContent: "center" }]}
                                        start={[0, 0]}
                                        end={[1, 1]}
                                        location={[0.5, 0.5]}
                                        colors={['#FF74A6', '#E167FF']}

                                        borderRadius={50}
                                    >
                                        <Ionicons name="close-circle" size={50} color="white" />
                                    </LinearGradient>
                                </View>
                            </View>
                        }
                        {!showCam && <>
                            <View className="w-12 h-12 absolute bottom-5 right-24">
                                <LinearGradient
                                    onTouchStart={handleClick}
                                    style={[{ padding: 10, width: 60, height: 60, borderRadius: 60 }]}
                                    start={[0, 0]}
                                    end={[1, 1]}
                                    location={[0.5, 0.5]}
                                    colors={['#FF74A6', '#E167FF']}

                                    borderRadius={50}
                                >
                                    <FontAwesome name="camera" size={38} color="white" />
                                </LinearGradient>
                            </View>
                            <View className="w-12 h-12 absolute bottom-5 right-5">
                                <LinearGradient
                                    onTouchStart={handleUpload}
                                    style={[{ padding: 10, width: 60, height: 60, borderRadius: 60 }]}
                                    start={[0, 0]}
                                    end={[1, 1]}
                                    location={[0.5, 0.5]}
                                    colors={['#FF74A6', '#E167FF']}

                                    borderRadius={50}
                                >
                                    <MaterialCommunityIcons name="upload" size={40} color="white" />
                                </LinearGradient>
                            </View>
                        </>
                        }
                    </View>

                    <View className="mb-5">
                        <GradientButton
                            pVertical={`0%`}
                            onPress={() => handleSubmit()}
                            label="Complete"
                            pVerticalBtn={`4%`}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
