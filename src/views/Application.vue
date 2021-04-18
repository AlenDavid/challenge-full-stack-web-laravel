<template>
	<div>
		<navigation />
		<router-view />
	</div>
</template>

<script lang="ts">
import Vue from "vue"
import Navigation from "@/components/UI/Navigation.vue"

export default Vue.extend({
	name: "App",
	components: {
		Navigation,
	},
})
</script>
