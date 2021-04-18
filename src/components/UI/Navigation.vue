<template>
	<v-navigation-drawer expand-on-hover>
		<v-list>
			<v-list-item link>
				<v-list-item-content>
					<v-list-item-title class="title"> {{ user.name }} </v-list-item-title>
					<v-list-item-subtitle> {{ user.email }}</v-list-item-subtitle>
					<v-list-item-content>{{ type }}</v-list-item-content>
				</v-list-item-content>
			</v-list-item>
		</v-list>

		<v-divider></v-divider>

		<v-list nav dense>
			<v-list-item link to="/app/students">
				<v-list-item-icon>
					<v-icon>mdi-account-supervisor</v-icon>
				</v-list-item-icon>
				<v-list-item-title>Students</v-list-item-title>
			</v-list-item>
			<v-list-item link to="/app/profile">
				<v-list-item-icon>
					<v-icon>mdi-face</v-icon>
				</v-list-item-icon>
				<v-list-item-title>Profile</v-list-item-title>
			</v-list-item>
			<v-list-item link to="/app/settings">
				<v-list-item-icon>
					<v-icon>mdi-wrench</v-icon>
				</v-list-item-icon>
				<v-list-item-title>Settings</v-list-item-title>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue"
import user from "@/store/modules/user"

export default Vue.extend({
	name: "Navigation",
	computed: {
		user: () => user.getters.user,
		type: () => {
			switch (user.getters.user.type) {
				case 0:
					return "Student"
				case 1:
					return "Manager"
				case 2:
					return "Admin"
			}

			return ""
		},
	},
})
</script>
