<template>
	<v-container>
		<h1>Students</h1>
		<v-row align="center">
			<v-col cols="12" sm="6" md="8">
				<v-text-field label="Type to search" v-model="search">
					<span slot="append">
						<v-btn outlined @click="refresh">Search</v-btn>
					</span>
				</v-text-field>
			</v-col>
			<v-col cols="12" sm="2" md="4">
				<v-btn block x-large color="primary">Register student</v-btn>
			</v-col>
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
				:footer-props="footerProps"
				@update:page="refreshPage"
				@update:items-per-page="refreshPerPage"
			></v-data-table>
		</v-row>
	</v-container>
</template>

<script>
import Vue from "vue"

export default Vue.extend({
	name: "StudentsList",
	data: () => ({
		page: 1,
		search: "",
		perPage: 5,
		total: -1,
		loading: true,
		headers: [
			{
				text: "RA (Academic Register)",
				align: "start",
				value: "RA",
				width: 1,
			},
			{ text: "Name", value: "name", width: 4 },
			{ text: "CPF", value: "CPF", width: 1 },
			{ text: "E-mail", value: "email", width: 6 },
		],
		footerProps: {
			itemsPerPageOptions: [5, 10, 15],
		},
	}),
	asyncComputed: {
		students: {
			get() {
				this.loading = true
				const url = `/api/students?page=${this.page}&per_page=${this.perPage}`

				const body = JSON.stringify({
					search: this.search,
				})

				return fetch(url, {
					method: "OPTIONS",
					body,
					headers: { "Content-Type": "application/json" },
				})
					.then((res) => res.json())
					.then(({ data, meta }) => {
						// update total fields
						this.total = meta.total

						setTimeout(() => {
							this.loading = false
						}, 800)

						return data
					})
			},
			default: [],
			shouldUpdate() {
				return this.students.length === 0 && this.search.length === 0
			},
		},
	},
	methods: {
		click(value) {
			console.log(value)
		},
		refresh() {
			this.$asyncComputed.students.update()
		},
		refreshPerPage(value) {
			this.perPage = value
			this.refresh()
		},
		refreshPage(value) {
			this.page = value
			this.refresh()
		},
	},
})
</script>
