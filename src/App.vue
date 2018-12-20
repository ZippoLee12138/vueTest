<template>
  <div id="app">
    <h1 v-html="title"></h1>
    <p>son tell father :{{sonMsg}}</p>
    <transition name="fade" mode="out-in">
      <component  :is="myComponent" fromFather="from father for componentB"  msgFromFather="msg from father" v-on:son-tell-father="sonTellMe"></component>
    </transition>
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
    <div>
      <button v-on:click="deleteStorage">清理缓存</button>
    </div>

    <div>
      <input v-model="computedItem" v-focus=""  />{{computedItemWithOutNumber}}
    </div>

    <div>
      <transition name="fade">
        <p v-show="show1">过渡效果</p>
      </transition>
    </div>
    <button v-on:click="show1Action">toggle1</button>

    <div>
      <p v-color=" 'green' ">自定义指令</p>
    </div>

    <router-view></router-view>
    <router-link :to="{ path : 'Python' }" tag="li">to Python</router-link>
    <router-link :to="{ path : 'JavaScript' }" tag='button'>to JavaScript</router-link>
     <router-link :to="{ name : 'es6Compoent' }" tag="a">to JavaScript ES6</router-link>

    <div v-on:click="getParam">
      {{$route.params.color}}
    </div>
    <button v-on:click="getParam">获取参数</button>


    <ul>
      <li v-for="production in productions">
        <span>{{production.name}}</span>
        <span>${{production.price}}</span>
      </li>
    </ul>
    <button @click="kfcSale">肯德基半件</button>

    <VuexComponentA></VuexComponentA>

  </div>

</template>

<script>
import Vue from "vue"
import Store from "./store.js"
import ComponentA from "./components/componentA"
import ComponentB from "./components/componentB"
import VuexComponentA from "./components/vuexComponentA"

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
      ],
      computedItem:'',
      myComponent:'ComponentB',
      show1:true,
      paramFromPython:'',
      productions: this.$store.state.KFCList.productions
    }
  },
  computed:{
    computedItemWithOutNumber :{
      get () {
        return this.computedItem.replace(/\d/g,'')
      },
      set (v) {        
        this.computedItem = '11aa22bb'
      }
    }
  },
  components:{ComponentA, ComponentB, VuexComponentA},
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
    },
    deleteStorage:function () {
      Store.remove()
    },
    computedItemWithOutNumber:function () {
      console.log(`func : computedItemWithOutNumber`);
      
      return this.computedItem.replace(/000/g,'')
    },
    show1Action:function () {
      this.show1 = !this.show1
      this.myComponent = this.myComponent == "ComponentA" ? "ComponentB":"ComponentA"

    },

    getParam:function () {
      console.log(this.$route.params);
      // this.paramFromPython = this.$route.params
    },

    kfcSale () {
      this.$store.dispatch('saleAction')
    }
  },
  watch:{
    items : {
      handler (items) {
        Store.save(items)
      },
      deep:true
    }
  },
  directives: {
    color:function (el,binding) {
      el.style.color = binding.value
    },
    focus: {
      inserted: function (el,binding) {
        el.focus()
      }
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

.fade-enter, .fade-leave-active {
  opacity: 0;
}

.fade-enter-active, .fade-leave {
  transition: opacity .5s ease-out;
}
</style>
