<template>
    <v-container v-if="loading">
        <div class="text-xs-center">
            <v-progress-circular indeterminate :size="150" :width="8" color="green"></v-progress-circular>
        </div>
    </v-container>

    <v-container v-else class="container">
        <v-btn class="back-btn" color="white">
            <router-link to="/" tag="v-btn">
                <span>Back</span>
            </router-link>
        </v-btn>
        <v-card class="article">
            <h2>{{ article.title }}</h2>
            <p>Author: {{ article.author }}</p>
            <p>Created: {{ article.created }}</p>
            <p>Modified: {{ article.modified }}</p>
            <p v-html="article.text"></p>
        </v-card>
    </v-container>
</template>

<script>
import ArticleService from "../services/ArticleService"

export default {
    props: {
       articleId: {
            type: String,
            required: true
        }
    },
    data: function () {
        return {
            article: {
                type: Object,
                default: {}
            },
            loading: true
        }
    },
    mounted () {
        if (this.articleId) {
            ArticleService.getArticleById(this.articleId)
            .then(response => {
                this.loading = false
                this.article = response
            })
        }
    },
    components: {
        ArticleService
    }
}
</script>


<style scoped>
.container h2 {
    text-align:center;
}
.article {
    margin: 1em;
    padding: 1%;
    margin-top: 0.2em;
}
.back-btn {
    margin-left: 1.1em;
}
</style>