<!-- eslint-disable vue/valid-template-root -->
<template> 
	<div class="list">
		<ul>
			<li v-for="(a, i) in todoItems" :key="i" class="shadow">
				{{ a }}
				<span class="removeBtn"><i class="fas fa-trash-alt"></i></span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data: function(){
		return {
			todoItems: []
		}
	},
	created: function(){
		// console.log('created');
		if (localStorage.length > 0) {
			for (var i = 0 ; i <localStorage.length; i++){
				if (localStorage.Key !== 'loglevel:webpack-dev-server'){
					this.todoItems.push(localStorage.key(i));  
					// localStorage.key(i)
				}
				
			}
		}
	}
}
</script>

<style>
ul{list-style-type:none; padding-left:0; margin-top:0; text-align:left; }
li{display:flex; min-height:50px; line-height:50px; height:50px; margin:.5rem 0; padding:0 .9rem; background:#fff; border-radius:5px; }
.checkBtn{line-height:45px; color:#62acde; margin-right:5px; }
.checkBtnCompleted{color:#b3adad; }
.textCompleted{text-decoration:line-through; color:#b3adad; }
.removeBtn{margin-left:auto; color:#de4343; }
</style>