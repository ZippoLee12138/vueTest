<template>
<div>
    <h2>组件componentA</h2>
    <p v-text="msgFromFather" v-on:click="tapAction"></p>
    <p>{{value}}</p>
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
        'msgFromFather',
        'value'
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
