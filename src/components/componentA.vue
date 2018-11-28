<template>
<div>
    <h2>组件componentA</h2>
    <p v-text="msgFromFather" v-on:click="tapAction"></p>
 </div>
</template>

<script>
export default {
    data () {
        return {
            msg:'son',
            msgFromSon:'msg from son'
        }
    },
    props:[
        'msgFromFather'
    ],
    methods : {
        tapAction () {
            this.$emit("son-tell-father",this.msgFromSon)
        }
    }
}
</script>

<style>

</style>
