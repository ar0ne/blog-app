<template>
    <v-content>
      <p>Home {{ text }}</p>
    </v-content>
</template>


<script>
    import feed from "../components/Feed.vue"

    export default {
        data: function () {
            return {
                'text': 'World'
            }
        },
        components: {
            feed
        }
    }
</script>