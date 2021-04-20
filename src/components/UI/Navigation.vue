<template>
	<v-navigation-drawer permanent>
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
			<v-list-group
				v-if="(user.type & 2) === 2"
				sub-group
				prepend-icon="mdi-account-circle"
			>
				<template v-slot:activator>
					<v-list-item-title>Students</v-list-item-title>
				</template>

				<v-list-item link to="/app/students/list">
					<v-list-item-icon>
						<v-icon>mdi-account-supervisor</v-icon>
					</v-list-item-icon>
					<v-list-item-title>All students</v-list-item-title>
				</v-list-item>

				<v-list-item link to="/app/students/create">
					<v-list-item-icon>
						<v-icon>mdi-account-plus</v-icon>
					</v-list-item-icon>
					<v-list-item-title>Register student</v-list-item-title>
				</v-list-item>
			</v-list-group>
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
			if ((user.getters.user.type & 1) === 1) {
				return "Student"
			}

			if ((user.getters.user.type & 4) === 4) {
				return "Admin"
			}

			if ((user.getters.user.type & 2) === 4) {
				return "Manager"
			}

			return ""
		},
	},
})
</script>
