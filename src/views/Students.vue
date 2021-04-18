<template>
	<v-container>
		<v-row>
			<p>search bar</p>
		</v-row>
		<v-row>
			<v-data-table
				class="col"
				disable-sort
				:server-items-length="total"
				@click:row="click"
				:headers="headers"
				:items="students"
				:loading="loading"
				:page="page"
				:items-per-page="perPage"
				@update:page="refreshPage"
				@update:items-per-page="refreshPerPage"
			></v-data-table>
		</v-row>
	</v-container>
</template>

<script>
import Vue from "vue"

export default Vue.extend({
	name: "Students",
	data: () => ({
		page: 1,
		perPage: 5,
		total: -1,
		loading: false,
		headers: [
			{
				text: "RA (Academic Register)",
				align: "start",
				value: "RA",
			},
			{ text: "Name", value: "name" },
			{ text: "CPF", value: "CPF" },
			{ text: "E-mail", value: "email" },
		],
	}),
	asyncComputed: {
		students: {
			async get() {
				this.loading = true
				const response = await fetch(
					`/api/students?page=${this.page}&per_page=${this.perPage}`,
					{ method: "OPTIONS" }
				)
				const { data, meta } = await response.json()
				// update total fields
				this.total = meta.total

				setTimeout(() => {
					this.loading = false
				}, 800)

				return data
			},
			default: [],
			watch: ["perPage"],
		},
	},
	methods: {
		click(value) {
			console.log(value)
		},

		refreshPerPage(value) {
			this.perPage = value
			this.$asyncComputed.students.update()
		},
		refreshPage(value) {
			this.page = value
			this.$asyncComputed.students.update()
		},
	},
})
</script>
