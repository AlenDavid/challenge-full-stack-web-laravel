<template>
	<v-row class="row">
		<navigation />
		<v-col>
			<router-view />
		</v-col>
	</v-row>
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

<style lang="scss" scoped>
.row {
	height: 100%;
	margin: 0;
}
</style>
