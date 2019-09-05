import axios from "axios"
import config from "config"  

export default {
    getArticles: function (pageNumber = "1") {
        return axios
            .get(`${config.BASE_API_URL}/articles/?page=${pageNumber}`)
            .then(response => {
                return response.data
            })
    },

    getArticleById: function (articleId) {
        return axios
            .get(`${config.BASE_API_URL}/articles/${articleId}/`)
            .then(response => {
                return response.data
            })
    },

    searchArticles: function (searchText) {
        return axios
            .get(`${config.BASE_API_URL}/search/${searchText}/`)
            .then(res => res.json())
            .then(res => {
                return res.data
            })
    },
}
