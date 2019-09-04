import axios from 'axios'

const BASE_API_URL = process.env.BASE_API_URL || 'http://localhost:8000/api/v1/'

export default {
    getArticles: function (pageNumber = '1') {
        return axios.get(BASE_API_URL + "articles/?page=" + pageNumber)
            .then(response => {
                return response.data
            })
    },

    getArticleById: function (articleId) {
        return axios.get(BASE_API_URL + "articles/" + articleId + "/")
            .then(response => {
                return response.data
            })
    },

    searchArticles: function (searchText) {
        return axios.get(BASE_API_URL + "search/" + searchText)
        .then(res => res.json())
        .then(res => {
            return res.data
        })
    }
}