<template>
    <v-container v-if="loading">
        <div class="text-xs-center">
        <v-progress-circular
            indeterminate
            :size="150"
            :width="8"
            color="green">
        </v-progress-circular>
        </div>
    </v-container>

    <v-container v-else class="feed-container">
        <article-card
            v-for="item in articles"
            v-bind:key="item.id"
            v-bind:item="item"
        ></article-card>
    </v-container>
</template>

<script>
import articleCard from "./ArticleCard.vue"
import blogAppApi from "../services/BlogAppApi"

export default {
    data: function () {
        return {
            articles: [],
            loading: true
        }
    },
    mounted () {
        blogAppApi.getAllArticles()
        .then(response => {
            this.loading = false
            this.articles = response.results
        })
        .catch(error => {
            console.log(error)
        })
    },
    components: {
        articleCard,
        blogAppApi
    }
}
</script>

<style scoped>
.feed-container {
    border-style: solid;
    border-color: red;
}
</style>