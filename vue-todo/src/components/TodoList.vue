<!-- eslint-disable vue/valid-template-root -->
<template> 
	<div class="list">
		<ul>
			<li v-for="(a, i) in propsdata" :key="i" class="shadow">
				<span class="checkBtn" @click="toggleComplete(a)">
					<i class="fas fa-check" :class="{checkBtnCompleted: a.completed}"></i>
				</span>
				<span :class="{textCompleted: a.completed}">{{ a.items }}</span>
				<span @click="removeTodo(a, i)" class="removeBtn"><i class="fas fa-trash-alt"></i></span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props:['propsdata'],
	data: function(){
		return {}
	},
	methods:{
		removeTodo: function(a, i){
			this.$emit('removeItem', a, i);
			// this.clearInput();
		},
		toggleComplete:function(a, i){
			this.$emit('toggleItem', a, i);
		},
	},
	
}
</script>

<style scoped>
ul{list-style-type:none; padding-left:0; margin-top:0; text-align:left; }
li{display:flex; min-height:50px; line-height:50px; height:50px; margin:.5rem 0; padding:0 .9rem; background:#fff; border-radius:5px; }
.removeBtn{margin-left:auto; color:#de4343; padding:0 12px; }
.checkBtn{line-height:45px; color:#62acde; margin-right:5px; }
.checkBtnCompleted{color:#b3adad; }
.textCompleted{text-decoration:line-through; color:#b3adad; }
</style>