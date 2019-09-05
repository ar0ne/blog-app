import axios from "axios"
import config from "config"

export default {
    getReadme() {
        return axios.get(config.README_URL).then(response => {
            return response.data
        })
    },
}
