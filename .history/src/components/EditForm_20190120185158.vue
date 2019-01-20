<template>
</template>

<script>
export default {
    name: 'EditForm',
    computed: {
        message() { return this.$store.getters.message }
    }
}
</script>