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

    <v-container v-else class="container">
        <h2>{{ article.title }}</h2>
        <p>Author: {{ article.author }}</p>
        <p>Created: {{ article.created }}</p>
        <p>Modified: {{ article.modified }}</p>
        <pre v-html="article.text"></pre>
    </v-container>  
</template>

<script>
import blogAppApi from "../services/BlogAppApi"

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
            blogAppApi.getArticleById(this.articleId)
            .then(response => {
                this.loading = false
                this.article = response
            })
        }
    },
    components: {

    }
}
</script>


<style scoped>
.container h2 {
    text-align:center;
}
</style>