<template>
  <div id="app">
    <h1 v-html="title"></h1>
    <p>son tell father :{{sonMsg}}</p>
    <component-a msgFromFather="msg from father" v-on:son-tell-father="sonTellMe"></component-a>
    <input v-model="newItem" v-on:keyup.enter="addNewItem" />
    <ul>
      <li v-for="item in items" v-bind:class="{finished: item.finished}" v-on:click="itemTap(item)">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
import Store from "./store.js";
import ComponentA from "./components/componentA"

export default {
  data (){
    return {
      title : '<span>LLL</span>This is a todo list.',
      items : Store.fetch(),
      thisisli:'ddde',
      newItem:'',
      sonMsg:'none'
    }
  },
  components:{ComponentA},
  methods :{
    addNewItem:function () {
      this.items.push({
        label:this.newItem,
        finished:false
      }),
      this.newItem = ''
    },
    itemTap:function (item) {
      item.finished = !item.finished
    },
    sonTellMe:function (sonMsg) {
     this.sonMsg = sonMsg
    }
  },
  watch:{
    items : {
      handler (items) {
        Store.save(items)
      },
      deep:true
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
