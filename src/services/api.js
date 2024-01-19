import axios from "axios";

const url = process.env.EXPO_PUBLIC_API_URL

export const userSignIn = async (body, params, options) => {
    const resp = await axios.request({
        url: `${url}/users/sign-in`,
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true,
        data: body,
    });
    return resp;
}