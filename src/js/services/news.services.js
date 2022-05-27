import axiosInstance from '../plagins/axios';


export async function getNews() {
    try {
        const response = await axiosInstance.get(`/news`)

        console.log(response)
        return response
    } catch (e) {
        console.log(e)
        return Promise.reject(e)
    }
}
