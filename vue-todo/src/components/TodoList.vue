<!-- eslint-disable vue/valid-template-root -->
<template> 
	<div class="list">
		<transition-group name="list" tag="ul">
			<li v-for="(a, index) in this.storedTodoItems" :key="a" class="shadow">
				<span class="checkBtn" @click="toggleComplete({todoItem, index})">
					<i class="fas fa-check" :class="{checkBtnCompleted: a.completed}"></i>
				</span>
				<span class="li_txt" :class="{textCompleted: a.completed}">{{ a.item }}</span>
				<span @click="removeTodo({a, index})" class="removeBtn"><i class="fas fa-trash-alt"></i></span>
			</li>
		</transition-group>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';


export default {
	methods:{
		...mapMutations({
			removeTodo: 'removeOneItem',
			toggleComplete: 'toggleOneItem'
		}),
		// removeTodo(todoItem, index){
		// 	this.$store.commit('removeOneItem', {todoItem, index});
		// },
		// toggleComplete(todoItem, index){
		// 	this.$store.commit('toggleOneItem', {todoItem, index})
		// },
	},
	computed:{
		...mapGetters(['storedTodoItems'])
		// todoItems(){
		// 	return this.$store.getters.storedTodoItems;
		// }
		// ...mapGetters({		// 이렇게 작성된 경우 li에 있는 this.storedTodoItmes 는 this.todoItems로 변경되어야함.
		// 	todoItems:'storedTodoItems'
		// })
	}
	
}
</script>

<style scoped>
ul{list-style-type:none; padding-left:0; margin-top:0; text-align:left; }
li{display:flex; min-height:50px; line-height:50px; height:50px; margin:.5rem 0; padding:0 .9rem; background:#fff; border-radius:5px; }
.removeBtn{margin-left:auto; color:#de4343; padding:0 12px; }
.li_txt{flex:0 0 auto; max-width:calc(100% - 60px); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.checkBtn{line-height:45px; color:#62acde; margin-right:5px; }
.checkBtnCompleted{color:#b3adad; }
.textCompleted{text-decoration:line-through; color:#b3adad; }

/* .list-item{display:inline-block; margin-right:10px; } */
.list-enter-active, .list-leave-active{transition:all 1s; }
.list-enter, .list-leave-to{opacity:0; transform:translateY(30px); }
</style>