<template>
  <div id="app">
    <TodoHeader />
    <TodoInput v-on:addTodoItem="addOneItem" />
    <TodoList
      :propsdata="todoItems" 
      v-on:removeItem="removeOneItem" 
      v-on:toggleItem="toggleOneItem"
    ></TodoList>
    <TodoFooter v-on:clearAll="clearAllItems" />
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default{
  components:{ TodoHeader, TodoInput, TodoList, TodoFooter },
  props:{},
  data: function() {
    return {
      todoItems:[],  
    }
  },
  methods:{
    addOneItem(a){
      const obj = {completed:false, items:a};
      // 저장합시다
      // localStorage.setItem(this.newTodoItem, obj);	// 이렇게 입력할 경우, value 값에 어떤 object가 들어갔는지 확인이 되지 않음.
      localStorage.setItem(a, JSON.stringify(obj)); 
      this.todoItems.push(obj); // 해당 리스트 만드는 역할..!
    },
    removeOneItem(a, i){
			localStorage.removeItem(a.items);		// 저장한 데이터 삭제 :: items 를 조건에서 삭제
			this.todoItems.splice(i, 1); 	// 리스트 todoitems 중에 index 1개 삭제
    }, 
    toggleOneItem(a, i){
			// a.completed = !a.completed;    // 여기스크립트는 props 데이터를 다시 받아와서 수정하는 방식
      this.todoItmes[i].completed = !this.todoItems[i].completed;   // 여기스크립트는 현재 .vue 에 있는 데이터를 수정하는 방식.

			localStorage.removeItem(a.item);		// localStorage에는 update가 없어서, 지우고 새로 추가.
			localStorage.setItem(a.item, JSON.stringify(a));
    },
    clearAllItems(){
      localStorage.clear();
      this.todoItems = [];
    }
  },
  created(){
		// console.log('created');
		if (localStorage.length > 0) {
			for (let i = 0 ; i <localStorage.length; i++){
				if (localStorage.Key !== 'loglevel:webpack-dev-server'){
					this.todoItems.sort().push(JSON.parse(localStorage.getItem(localStorage.key(i))));  
				}
			}
		}
	}
}

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
</script>

<style>
body{text-align:center; background:#f6f6f6; }
input{border-style:groove; width:200px; height:auto; padding:10px 16px; }
button{border-style:groove; }
li{list-style:none; }
.shadow{box-shadow:0 0 5px rgba(0,0,0,.16);}
</style>
