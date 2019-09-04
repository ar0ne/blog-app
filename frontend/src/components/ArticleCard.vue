<template>
    <v-card class="article-card-item">
        <p>{{ item.id }}: {{ item.title }}</p>
        <div v-html="item.text"></div>
        <p>Author: {{ item.author }}</p>
        <p>Created: {{ item.created }}</p>
        <article-card-more-btn
            v-bind:articleId="item.id"
        ></article-card-more-btn>
    </v-card>
</template>

<script>
import articleCardMoreBtn from './ArticleCardMoreBtn.vue'

export default {
    props: {
        item: {
            type: Object,
            default: () => ({
                id: '',
                title: '',
                text: '',
                author: '',
                created: new Date().getTime(),
            })
        }
    },
    components: {
        articleCardMoreBtn
    }
}
</script>

<style scoped>
.article-card-item {
    margin: 1em;
    padding: 1%;
}
</style>