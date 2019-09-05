<template>
    <v-container v-if="loading">
        <div class="text-xs-center">
            <v-progress-circular indeterminate :size="150" :width="8" color="green"></v-progress-circular>
        </div>
    </v-container>

    <v-container v-else class="feed-container">
        <search></search>
        <article-card v-for="item in articles" v-bind:key="item.id" v-bind:item="item"></article-card>
        <v-btn v-if="this.nextPage" @click="loadNextPage()">More</v-btn>
    </v-container>
</template>

<script>
import articleCard from "./ArticleCard.vue"
import search from "./Search.vue"
import ArticleService from "../services/ArticleService"

export default {
    name: "Feed",
    data: function() {
        return {
            articles: [],
            loading: true,
            page: 1,
        }
    },
    mounted() {
        ArticleService.getArticles(this.page)
            .then(response => {
                this.loading = false
                this.articles = response.results
                this.nextPage = response.next
            })
            .catch(error => {
                console.log(error)
            })
    },
    components: {
        articleCard,
        ArticleService,
        search,
    },
    methods: {
        loadNextPage: function() {
            ArticleService.getArticles(++this.page)
                .then(response => {
                    console.log(response)
                    if (response && response.results) {
                        this.loading = false
                        this.nextPage = response.next
                        this.articles = this.articles.concat(response.results)
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        },
    },
}
</script>

<style scoped>
.feed-container {
    margin: 0.1em;
}
</style>