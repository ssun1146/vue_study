<!-- eslint-disable vue/valid-template-root -->
<template> 
	<div class="inputBox shadow">
		<input type="text" v-model="newTodoItem" @keyup.enter="addTodo" />
		<!-- <button v-on:click="addTodo">add</button> -->
		<span class="addContainer" v-on:click="addTodo"><i class="fas fa-plus addBtn"></i></span>
		<AlertModal v-if="showModal" @close="showModal = false">
			<!--
			you can use custom content here to overwrite
			default content
			-->
			<h3 slot="header">경고! <i class="closeModalBtn fas fa-times" @click="showModal = false"></i></h3>
			<h3 slot="body">아무것도 입력하지 않았습니다.</h3>
		</AlertModal>
	</div>
</template>

<script>
import AlertModal from './common/AlertModal.vue'

export default {
	data(){
		return {
			newTodoItem:'',
			showModal:false, 
		}
	},
	methods:{
		addTodo(){
			// console.log(this.newTodoItem);

			if (this.newTodoItem !== ''){ 	// newTodoItem에 값이 있을 때
				this.$emit('addTodoItem',this.newTodoItem); 
				this.clearInput();		 // input 값은 비워줌.
			} else {
				this.showModal = !this.showModal 
			}
		},
		clearInput(){
			this.newTodoItem = ''; 
		},
	},
	components:{ AlertModal:AlertModal, },
}
</script>

<style scoped>
input:focus{outline:none; }
.inputBox{display:flex; justify-content:flex-start; align-items:center; background:#fff; height:50px; line-height:50px; border-radius:5px; }
.inputBox:after{content:''; display:block; clear:both; }
.inputBox input{flex:1 1 auto; border-style:none; font-size:.9rem; }
.addContainer{float:right; background:linear-gradient(to right, #5b71ec, #8763fb); display:block; width:3rem; border-radius:0 5px 5px 0; }
.addBtn{color:#fff; vertical-align:middle; }
.closeModalBtn{color:#42b983; cursor:pointer; }
</style>