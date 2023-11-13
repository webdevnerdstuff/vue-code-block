<template>
	<v-row :id="sectionId">
		<v-col cols="12">
			<h3 :class="classes.h3">
				<a
					:class="classes.headerA"
					:href="`#${sectionId}`"
				>#</a>
				{{ sectionTitle }}
			</h3>
			<div
				v-if="subtitle"
				v-html="subtitle"
			></div>
		</v-col>
	</v-row>

	<v-row>
		<v-col cols="12">
			<v-card>
				<v-card-title>
					<v-text-field
						v-model="search"
						append-icon="mdi:mdi-magnify"
						hide-details
						label="Search"
						single-line
						variant="underlined"
					></v-text-field>
				</v-card-title>

				<v-data-table
					:headers="headers"
					hide-default-footer
					:items="items"
					:items-per-page="-1"
					:search="search"
					:sort-by="[{ key: 'name', order: 'asc' }]"
				>
					<template #[`item.name`]="{ item }">
						<td>
							<span
								:id="`props-${sectionId ? `${sectionId}-${item.name}` : item.name}`"
								class="name-item text-mono ml-n2"
							>
								<span class="text-primary">#</span>
								<a
									class="text-primary"
									:class="classes.appLink"
									:href="`#props-${sectionId ? `${sectionId}-${item.name}` : item.name}`"
								>{{ item.name }}</a>
							</span>

						</td>
					</template>

					<template #[`item.type`]="{ item }">
						<td
							class="text-success"
							v-html="item.type"
						></td>
					</template>

					<template #[`item.default`]="{ item }">
						<td
							class="text-accent"
							v-html="item.default"
						></td>
					</template>

					<template #[`item.desc`]="{ item }">
						<td v-html="item.desc"></td>
					</template>
				</v-data-table>
			</v-card>
		</v-col>
	</v-row>
</template>

<script setup>
import { inject } from 'vue';


const classes = inject('classes');

defineProps({
	headers: {
		default: () => [],
		type: Array,
	},
	items: {
		default: () => [],
		type: Array,
	},
	sectionId: {
		default: '',
		type: String,
	},
	sectionTitle: {
		default: null,
		type: String,
	},
	subtitle: {
		default: null,
		type: String,
	},
});

const search = ref('');
</script>

<style lang="scss" scoped>
td {
	padding-bottom: 10px !important;
	padding-top: 10px !important;
}
</style>
