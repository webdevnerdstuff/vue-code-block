<template>
	<v-row>
		<v-col
			id="legal"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#legal"
				>#</a>
				Legal
			</h2>
		</v-col>

		<v-col cols="12">
			<p>

			</p>
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
const classes = inject<Docs.GlobalClasses>('classes')!;
</script>
