<template>
	<v-row>
		<v-col
			id="props"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#props"
				>#</a>
				Props
			</h2>
		</v-col>

		<v-col cols="12">
			<PropsTable
				:headers="propsStore.propsHeaders"
				:items="propsStore.componentProps"
				section-id="component-props"
			/>
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import PropsTable from '@/documentation/components/PropsTable.vue';
import { usePropsStore } from '@/stores/props';

const classes = inject<Docs.GlobalClasses>('classes')!;
const propsStore = usePropsStore();
</script>
