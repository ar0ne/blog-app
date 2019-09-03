<template>
    <div class="navbar" slot="header-navbar">
        <ul>
            <li>

            </li>
        </ul>

        <slot></slot>
    </div>
</template>

<script>
import VLink from "../components/VLink.vue";

export default {
    components: {
        VLink
    }
}
</script>