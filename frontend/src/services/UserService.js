import axios from "axios"
import config from "config"

export default {
    login: function(username, password) {
        return axios
            .post(`${config.BASE_API_URL}/auth/login/`, {
                username: username,
                password: password,
            })
            .then(response => {
                console.log(response)
                if (response && response.data && response.data.token) {
                    localStorage.setItem("user", JSON.stringify(response.data))
                }
                return response.data
            })
            .catch(error => {
                if (error.response) {
                    console.log(error.response.data)
                    console.log(error.response.status)
                }
            })
    },
}
