<template>
    <h1>Hello {{username}}</h1>
</template>

<script>
import UserService from "../services/UserService"
export default {
    data: function() {
        return {
            username: ''
        }
    },
    mounted() {
        UserService.login("test1", "12345678?")
        .then(data => {
            this.username = data.user.username
        })
    },
    components: {
        UserService,
    },
}
</script>

<style scoped>
</style>