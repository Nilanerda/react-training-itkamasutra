import * as axios from "axios";

let axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '61f61afb-d156-4111-9507-73744ab9bc1d'
    }
})

export const usersAPI = {
    getUsers(currentPage, shownUsers) {
        return axiosInstance
            .get(`users?page=${currentPage}&count=${shownUsers}`, {})
            .then(response => {
                return response.data
            })
    }
}