<template>
	<v-row>
		<v-col
			id="examples"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#examples"
				>#</a>
				Examples
			</h2>
		</v-col>

		<!-- ================================================== Text Field Examples -->
	</v-row>

	<LangExamples />
	<AdditionalLangExamples />
	<PluginExamples />
	<TabExamples />
	<ButtonExamples />
	<BrowserWindowExamples />
	<OtherExamples />
</template>

<script setup>
import { inject } from 'vue';
import {
	AdditionalLangExamples,
	BrowserWindowExamples,
	ButtonExamples,
	LangExamples,
	OtherExamples,
	PluginExamples,
	TabExamples,
} from '@/documentation/components/examples';

const classes = inject('classes');
</script>
