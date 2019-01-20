<script>
export default {
    created() {
        console.log(this.$store.state.count)
        this.$store.commit('increment')
    }
}
</script>