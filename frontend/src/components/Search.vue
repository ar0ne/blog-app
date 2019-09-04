<template>
  <v-toolbar color="blue-grey lighten-4" class="search-container">
    <v-toolbar-title class="title mr-6 hidden-sm-and-down">Search</v-toolbar-title>
    <v-autocomplete
      v-model="model"
      :items="items"
      :loading="isLoading"
      :search-input.sync="search"
      chips
      clearable
      hide-details
      hide-selected
      item-text="name"
      item-value="symbol"
      label="Search for an interesting articles..."
      solo
    >
      <template v-slot:no-data>
        <v-list-item>
          <v-list-item-title>
            ...
          </v-list-item-title>
        </v-list-item>
      </template>
      <template v-slot:selection="{ attr, on, item, selected }">
        <v-chip
          v-bind="attr"
          :input-value="selected"
          color="blue-grey"
          class="white--text"
          v-on="on"
        >
          <v-icon left>mdi-coin</v-icon>
          <span v-text="item.name"></span>
        </v-chip>
      </template>
      <template v-slot:item="{ item }">
        <v-list-item-avatar
          color="indigo"
          class="headline font-weight-light white--text"
        >
          {{ item.name.charAt(0) }}
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="item.name"></v-list-item-title>
          <v-list-item-subtitle v-text="item.symbol"></v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon>mdi-coin</v-icon>
        </v-list-item-action>
      </template>
    </v-autocomplete>
  </v-toolbar>
</template>

<script>
import blogAppApi from "../services/BlogAppApi"
export default {
    data: () => ({
      isLoading: false,
      items: [],
      model: null,
      search: null,
    }),

    watch: {
      search (val) {
        // Items have already been loaded
        if (this.items.length > 0) return

        this.isLoading = true

        blogAppApi.searchArticles(this.search)
          .catch(err => {
            console.log(err)
          })
          .finally(() => (this.isLoading = false))
      },
    },
  }
</script>

<style scoped>
.search-container {
    margin: 1em;
}
</style>