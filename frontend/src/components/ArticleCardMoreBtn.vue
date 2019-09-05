<template>
    <v-btn :to="`articles/${articleId}`">Read more</v-btn>
</template>

<script>
export default {
    props: {
        articleId: {
            type: Number,
            required: true,
            default: 2,
        },
    },
}
</script>

<style scoped>
</style>