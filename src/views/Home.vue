<template>
	<v-container>
		<h1 class="text-center text-h1 pb-12">A+ Students</h1>
		<v-row>
			<v-col
				><v-row>
					<v-col>
						<p class="text-h5">
							<span>
								Tired of handling so much submission papers for your students
								every day?
							</span>
						</p>
						<p class="text-h6">
							<span>We can help you!</span>
						</p>
					</v-col>
				</v-row>
				<v-divider class="pb-4" />
				<v-row>
					<v-col>
						<p class="text-h5">
							<span>How can we help?</span>
						</p>
						<p class="text-h6">
							<span>We are here to manage your students data.</span>
							<span>
								Our application can handle the registration and configuration
								for every day tasks.
							</span>
						</p>
					</v-col>
				</v-row>
				<v-divider class="pb-4" />
				<v-row>
					<v-col>
						<p class="text-h5">
							<span>
								You know those teachers how no one knows what them teaches?
							</span>
						</p>
						<p class="text-h6">
							<span>You can add them as managers for you!</span>
						</p>
					</v-col>
				</v-row>
			</v-col>
			<v-col>
				<v-row>
					<v-col>
						<p class="text-h3 text-center">
							<span>You cannot miss this change!</span>
						</p>
						<p class="text-h4">
							<span>
								<v-btn color="primary" block>Create your account!</v-btn>
							</span>
						</p>

						<p></p
					></v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
	name: "Home",
})
</script>
