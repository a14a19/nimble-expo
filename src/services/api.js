import axios from "axios"

const url = process.env.EXPO_PUBLIC_API_URL

export const userSignIn = async (body, params, options) => {
  console.log(body, url)
  const resp = await axios.request({
    url: `${url}/users/sign-in`,
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    data: body,
  })
  return resp
}

export const userSignUp = async (body) => {
  const config = {
    method: "POST",
    url: `${url}/users/sign-up`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    data: body,
  }

  try {
    const res = await axios.request(config)
    console.log(res.data)
    return res.data
  } catch (error) {
    console.error("Error:", error)
  }
}

export const userFinalSignUp = async (body, params, options) => {
  const resp = await axios.request({
    url: `${url}/users/update/${params.id}`,
    method: "put",
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true,
    data: body,
  });
  return resp;
}

export const userProfileUpdate = async (body, params, options) => {
  const resp = await axios.request({
    url: `${url}/users/update-profile-pic/${params.id}`,
    method: "put",
    headers: {
      // 'Content-Type': 'application/json'
      'Content-Type': 'multipart/form-data'
    },
    withCredentials: true,
    data: body,
  });
  return resp;
}

export const passwordChange = async (body, params, options) => {
  const resp = await axios.request({
    url: `${url}/users/update-password/${params.id}`,
    method: "put",
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true,
    data: body,
  });
  return resp;
}

export const userVerifyingOTP = async (body, params, options) => {
  const resp = await axios.request({
    url: `${url}/users/verify-otp/${params.id}`,
    method: "post",
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true,
    data: body,
  });
  return resp;
}
