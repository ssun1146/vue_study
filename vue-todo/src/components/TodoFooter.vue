<!-- eslint-disable vue/valid-template-root -->
<template> 
	<div class="clearAllContainer">
		<span class="clearAllBtn" @click="clearTodo">
			<i class="fas fa-trash"></i> Clear All
		</span>
	</div>
</template>

<script>
export default {
	methods:{
		clearTodo: function(){
			this.$emit('clearAll')
		}
	}
}
</script>

<style scoped>
.clearAllContainer{width:8.5rem; height:50px; line-height:50px; background:#fff; border-radius:5px; margin:12px auto; }
.clearAllBtn{display:block; color:#e20303; font-weight:bold; }

</style>