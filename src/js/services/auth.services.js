import axiosInstance from '../plagins/axios';


export async function login(email, password) {
    try {
        const response = await axiosInstance.post(`/auth/login`, JSON.stringify({email, password}), {})

        console.log(response)
        return response
    } catch (e) {
        console.log(e)
        return Promise.reject(e)
    }
}
