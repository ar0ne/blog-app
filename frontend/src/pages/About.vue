<template>
    <v-container v-if="loading">
        <div class="text-xs-center">
            <v-progress-circular indeterminate :size="150" :width="8" color="green"></v-progress-circular>
        </div>
    </v-container>

    <v-container v-else>
        <vue-markdown>{{text}}</vue-markdown>
    </v-container>
</template>

<script>
import AboutService from "../services/AboutService"
import VueMarkdown from "vue-markdown"

export default {
    data: function() {
        return {
            loading: true,
            text: "",
        }
    },
    mounted() {
        AboutService.getReadme()
            .then(response => {
                this.text = response
                this.loading = false
            })
            .catch(error => {
                console.log(error)
            })
    },
    components: {
        AboutService,
        VueMarkdown,
    },
}
</script>