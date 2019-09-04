<template>
  <v-app>
    <v-toolbar 
        dense 
        dark
        fixed
        max-height="48px"
        >
        <v-toolbar-title class="headline">
            <v-btn
            >
                <router-link
                    to='/'
                    tag='span'
                    style='cursor: pointer'>
                    Home
                </router-link>
            </v-btn>
        </v-toolbar-title>
        &nbsp;

        <v-toolbar-title class="headline">
            <v-btn
            >
                <router-link
                    to='/about'
                    tag='span'
                    style='cursor: pointer'>
                    About
                </router-link>
            </v-btn>
        </v-toolbar-title>
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