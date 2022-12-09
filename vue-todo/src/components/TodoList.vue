<!-- eslint-disable vue/valid-template-root -->
<template> 
	<div class="list">
		<transition-group name="list" tag="ul">
			<li v-for="(a, i) in propsdata" :key="a" class="shadow">
				<span class="checkBtn" @click="toggleComplete(a)">
					<i class="fas fa-check" :class="{checkBtnCompleted: a.completed}"></i>
				</span>
				<span :class="{textCompleted: a.completed}">{{ a.items }}</span>
				<span @click="removeTodo(a, i)" class="removeBtn"><i class="fas fa-trash-alt"></i></span>
			</li>
		</transition-group>
	</div>
</template>

<script>
export default {
	props:['propsdata'],
	data: function(){
		return {}
	},
	methods:{
		removeTodo(a, i){
			this.$emit('removeItem', a, i);
			// this.clearInput();
		},
		toggleComplete(a, i){
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

/* .list-item{display:inline-block; margin-right:10px; } */
.list-enter-active, .list-leave-active{transition:all 1s; }
.list-enter, .list-leave-to{opacity:0; transform:translateY(30px); }
</style>