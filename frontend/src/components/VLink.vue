<template>
    <a 
        v-bind:href="href"
        v-bind:class="{ active: isActive }"
        v-on:click="go"
    >
        <slot></slot>
    </a>
</template>

<script>

</script>

<style scoped>
    .active {
        color: blueviolet;
    }
</style>