<template>
	<div class="row mb-5">
		<div :class="styleData.h2ColClass">
			<h2>Events</h2>
		</div>

		<div class="col-12 mb-3">
			<div class="table-responsive">
				<table class="table table-striped">
					<thead>
						<tr>
							<th>Name</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(event, key) in componentEvents" :key="event">
							<td valign="top">{{ key }}</td>
							<td valign="top">{{ event.description }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script setup>
import { inject } from 'vue';


const styleData = inject('styleData');

const componentEvents = {
	run: {
		description: 'The event emitted when the run tab is clicked.',
	},
	'update:copy-status': {
		description: 'The event emitted when the copy status is updated.',
	},
};
</script>

<style lang="scss" scoped>
.prop {
	&-default {
		color: #002eb9 !important;
	}

	&-type {
		color: #900090 !important;
		font-weight: bold !important;
	}
}
</style>
