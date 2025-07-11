<template>
	<slot v-if="load"></slot>
	<div v-else ref="box" :style="{ height: height, width: width }">
	</div>
</template>
<script setup lang='ts'>
import { ref, onMounted, onBeforeUnmount } from 'vue';
const props = defineProps({
	width: {
		type: String,
		default: '100%'
	},
	height: {
		type: String,
		default: '100%'
	}
})
const load = ref(false)
const box = ref()
let observer = null
const initLazyIntersectionObserver = (fn) => {
	const observer = new IntersectionObserver(
		entrys => entrys.forEach(entry => fn(entry)),
		{
			rootMargin: '0px',
			threshold: 0,
		}
	);
	return observer;
}
onMounted(() => {
	observer = initLazyIntersectionObserver(entry => {
		if (entry.isIntersecting) {
			load.value = true
			observer.unobserve(box.value)
			observer = null
		}
	})
	observer.observe(box.value)
})

onBeforeUnmount(() => observer && observer.unobserve(box.value))

</script>