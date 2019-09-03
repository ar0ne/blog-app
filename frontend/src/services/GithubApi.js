import axios from 'axios'

const README_URL = 'https://raw.githubusercontent.com/ar0ne/blog-app/master/readme.md'

export default {
    getReadme() {
        return axios.get(README_URL)
        .then(response => {
            return response.data
        })
    }
}