<template>
  <div id="app">
    <h1 v-html="title"></h1>
    <p>son tell father :{{sonMsg}}</p>
    <componentA  msgFromFather="msg from father" v-on:son-tell-father="sonTellMe"></componentA>
    <input v-model="newItem" v-on:keyup.enter="addNewItem" :class="[inputClassArr,inputClass]" :style="inputStyle"/>

    <button v-on:click="addItem">addItem</button>
    <a v-if="showBaidu" :href="link" title="百度">to baidu</a>
    <a v-show="!showBaidu" :href="linkGoogle" title="谷歌">to Google</a>
    <button v-on:click="toggle">toggle</button>
    <ul>
      <li v-for="(item,index) in items" v-bind:class="{finished: item.finished}" v-on:click="itemTap(item)" v-bind:title="item.label">
        {{index}}-- {{item.label}}
      </li>
    </ul>

    <input v-model.trim="input2" />{{ input2}}

    <input v-model="myBox" type="radio" value="apple" />
    <input v-model="myBox" type="radio" value="banana" />
    <input v-model="myBox" type="radio" value="orange" />
    {{myBox}}

    <select v-model="selection">
      <option v-for="item in selectionOptions" :value="item.name">{{item.name}}</option>
    </select>
    {{selection}}
    <!-- <div>
      <ul>
        <li v-for="(value,key) in objList">
        {{key+':'+value}}
        </li>
      </ul>
    </div> -->

  </div>

</template>

<script>
import Store from "./store.js"
import ComponentA from "./components/componentA"
import Vue from "vue"

export default {
  data (){
    return {
      title : '<span>LLL</span>This is a todo list.',
      items : Store.fetch(),
      thisisli:'ddde',
      newItem:'',
      sonMsg:'none',
      objList:{
        name:'lllll',
        num:222,
        text:'dddd',
      },
      link:"https://www.baidu.com",
      showBaidu:true,
      linkGoogle:"https://www.google.com",
      inputClass:{
        'red-font':true,
        'blue-font':true
      },
      inputClassArr:[
        'arr-class-1',
        'arr-class-2'
      ],
      inputStyle:{
        'color':'black',
        'background-color':'#873f82'
      },
      input2:0,
      myBox:[],
      selection:'',
      selectionOptions:[
        {
          name:'jerry'
        },
        {
          name:'may'
        },
        {
          name:'rechild'
        }        
      ]
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
    },
    addItem:function () {
      // console.log(this.items);
      
      // this.items.push({
      //   label:'kkkkkk',
      //   finished:false
      // })
      Vue.set(this.items,2,{
        label:'Vue.set',
        finished:true
      })
    },
    toggle:function () {
      this.showBaidu = !this.showBaidu 
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
