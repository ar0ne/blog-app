<template>
    <v-content>
      <p>Home Page</p>
    </v-content>
</template>


<script>
import mainLayout from "../layouts/MainLayout.vue"
import feed from "../components/Feed.vue"

export default {
    data: function () {
        return {
            'text': 'World'
        }
    },
    components: {
        mainLayout,
        feed
    }
}
</script>