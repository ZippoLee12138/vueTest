<template >

    <div>
        <!-- <h1>component from componentB</h1> -->
        <h1 class="red-font">{{title}}</h1>
        {{fromFather}}
    </div>

</template>

<script>

export default {
    data () {
        return {
            title:'componentB'
        }
    },
    props:['fromFather']
}

</script>

<style>
    
    .red-font{
        color: red;
    }
</style>