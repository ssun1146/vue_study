<!-- eslint-disable vue/valid-template-root -->
<template> 
	<div class="header">
		<!-- <h1>Todo it!</h1> -->
		<h1>{{ this.$store.state.headerText }}</h1>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped>
h1{color:#2f3b52; font-weight:bold; margin:2.5rem 0 1.5rem; }
</style>