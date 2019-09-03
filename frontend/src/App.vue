<template>
  <v-app>
    <v-toolbar prominent dark>
        <v-toolbar-items>
            <v-toolbar-title class="headline">
                <router-link
                    to='/'
                    tag='span'
                    style='cursor: pointer'>
                    Home
                </router-link>
            </v-toolbar-title>
            &nbsp;

            <v-toolbar-title class="headline">
                <router-link
                    to='/about'
                    tag='span'
                    style='cursor: pointer'>
                    About
                </router-link>
            </v-toolbar-title>
        </v-toolbar-items>
    </v-toolbar>

     <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>