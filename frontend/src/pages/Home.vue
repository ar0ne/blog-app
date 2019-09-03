<template>
    <p>Hello, {{ text }} </p>
</template>

<script>
export default {
    name: 'Home',
    data: function () {
        return {
            'text': 'World'
        }
    }
}
</script>