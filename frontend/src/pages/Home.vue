<template>
    <v-content>
        <feed></feed>
    </v-content>
</template>


<script>
    import feed from "../components/Feed.vue"

    export default {
        name: "Home",
        components: {
            feed
        }
    }
</script>