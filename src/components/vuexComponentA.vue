<template>
    <div>
        <h3>vuex component A</h3>
        <ul>
            <li v-for="production in productions">
                <span>{{production.name}}</span>
                <span>${{production.price}}</span>
            </li>
        </ul>
        <button v-on:click="minusAction">减价</button>
        <button @click="minusPriceAsync">延迟减价</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            productions: this.$store.getters.saleProduct
        }
    },
    methods: {
        minusAction () {
            this.$store.commit('minusPrice', 2)
        },
        minusPriceAsync () {
            this.$store.dispatch('minusPriceAsync', 5)
        }
    }
}
</script>

<style scoped>

</style>
