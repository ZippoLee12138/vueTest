<template>
  <div id="app">
    <h1 v-text="title"></h1>
    <ul>
      <li v-for="item in items" v-bind:class="{finished: item.finished}" >
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data (){
    return {
      title : '<span>LLL</span>This is a todo list.',
      items : [
        {
          label:'vue learning',
          finished:true,
        },
        {
          label:'swiming',
          finished:false,
        },
      ],
      thisisli:'ddde'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.finished{
  text-decoration: line-through;
}
</style>
