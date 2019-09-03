<template>
    <main-layout>
        <p>Hello, {{ text }} </p>
    </main-layout>
</template>

<script>
import mainLayout from "../layouts/MainLayout.vue"

export default {
    data: function () {
        return {
            'text': 'World'
        }
    },
    components: {
        mainLayout
    }
}
</script>