<template>
    <div class="article-card-item">
        <p>{{ item.id }}: {{ item.title }}</p>
        <div v-html="item.text"></div>
        <p>Author: {{ item.author }}</p>
        <p>Created: {{ item.created }}</p>
    </div>
</template>

<script>
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
    }    
}
</script>

<style scoped>
.article-card-item {
    margin: 5px;
    border-style: solid;
    border-color: green;
}
</style>