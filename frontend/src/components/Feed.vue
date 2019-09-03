<template>
    <div class="feed-container">
        <article-card
            v-for="item in articles"
            v-bind:key="item.id"
            v-bind:item="item"
        ></article-card>
    </div>
</template>

<script>
import articleCard from "./ArticleCard.vue"

export default {
    data:  function () {
        return {
            articles: [
                {
                    "id": 4,
                    "title": "Hurricane Maria",
                    "text": "Hurricane Maria was a deadly Category 5 hurricane that devastated Dominica, the U.S. Virgin Islands, and Puerto Rico in September 2017. It is regarded as the worst natural disaster in recorded history to affect those islands and was also the deadlies...",
                    "author": 2,
                    "created": "2019-09-02T13:25:07.154000Z",
                    "modified": "2019-09-02T13:25:07.154000Z"
                },
                {
                    "id": 3,
                    "title": "Hurricane Irma",
                    "text": "Hurricane Irma was the strongest observed hurricane in the Atlantic in terms of maximum sustained winds since Wilma. Irma was the first Category&nbsp;5 hurricane to strike the Leeward Islands on record, followed by Maria two weeks later. The ninth na...",
                    "author": 3,
                    "created": "2019-09-02T13:24:42.519000Z",
                    "modified": "2019-09-02T13:24:42.519000Z"
                }
            ]
        }
    },
    components: {
        articleCard
    }
}
</script>

<style scoped>
.feed-container {
    border-style: solid;
    border-color: red;
}
</style>