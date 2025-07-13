<template>
	<section class='AuthorizationButton'>
		<slot v-if="isAuth" />
	</section>
</template>

<script setup lang='ts'>
const props = defineProps({
	code: {
		type: String,
		default: ''
	},
})
const isAuth = computed(() => {
	const auths = ['system:user:edit']
	if (auths.includes(props?.code)){ return true}
	return false
})
</script>
<style scoped lang='scss'>
.AuthorizationButton {

}
</style>