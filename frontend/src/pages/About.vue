<template>
  <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular indeterminate :size="150" :width="8" color="green"></v-progress-circular>
    </div>
  </v-container>

  <v-container v-else>
    <pre>{{ text }}</pre>
  </v-container>
</template>

<script>
import AboutService from "../services/AboutService";

export default {
  data: function() {
    return {
      loading: true,
      text: ""
    };
  },
  mounted() {
    AboutService.getReadme()
      .then(response => {
        this.text = response;
        this.loading = false;
      })
      .catch(error => {
        console.log(error);
      });
  },
  components: {
    AboutService
  }
};
</script>