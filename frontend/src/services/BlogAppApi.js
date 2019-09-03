import axios from 'axios'

const BASE_API_URL = 'http://localhost:8000/api/v1/'

export default {
    getAllArticles: function () {
        return axios.get(BASE_API_URL + "articles/")
            .then(response => {
                return response.data
            })
    },

    getArticleById: function (articleId) {
        return axios.get(BASE_API_URL + "articles/" + articleId + "/")
            .then(response => {
                return response.data
            })
    }
}