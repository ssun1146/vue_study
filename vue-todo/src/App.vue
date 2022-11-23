<template>
  <div id="app">
    <TodoHeader />
    <TodoInput />
    <TodoList />
    <TodoFooter />
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

// ES5 로 할 때 이렇게 하는구먼!
// var my_cmp = {
//   template: '<div>my component</div>'
// }

// new Vue({
//   el:'',
//   components:{
//     'my_cmp': my_cmp
//   }
// })

export default{
  components:{ TodoHeader, TodoInput, TodoList, TodoFooter },
  props:{},
  data(){
      return{
      }
  },
  methods:{
  }

}
</script>

<style>
body{text-align:center; background:#f6f6f6; }
input{border-style:groove; width:200px; height:auto; padding:10px 16px; }
button{border-style:groove; }
li{list-style:none; }
.shadow{box-shadow:0 0 5px rgba(0,0,0,.16);}
</style>
