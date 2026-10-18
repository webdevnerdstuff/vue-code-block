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

		<ExampleContainer
			v-for="name in exampleOrder"
			:key="name"
			:code="getTemplateCode(name)"
		>
			<component
				:is="Example[name]"
				:ref="refSetters[name]"
			/>
		</ExampleContainer>
	</v-row>
</template>

<script setup lang="ts">
import ExampleContainer from '../components/ExampleContainer.vue';
import * as Example from '../components/examples';

type ExampleName = keyof typeof Example;
interface ExampleInstance {
	exampleCode?: Docs.ExampleCode;
}

const classes = inject<Docs.GlobalClasses>('classes')!;

const exampleOrder: ExampleName[] = [
	'JavascriptExample',
	'VueExample',
	'CssExample',
	'HtmlExample',
	'TypescriptExample',
	'JsonExample',
	'PhpExample',
	'PluginExample',
	'CopyTabExample',
	'RunTabExample',
	'CopyAndRunTabsExample',
	'CopyButtonExample',
	'PersistentCopyButtonExample',
	'BrowserWindowExample',
	'CodeBlockRadiusExample',
	'CopyTextExample',
	'RunTextExample',
	'FloatingTabsExample',
	'HeightExample',
	'TabGapExample',
	'IndentExample',
];

const exampleRefs = shallowReactive<Partial<Record<ExampleName, ExampleInstance | null>>>({});

// One stable ref callback per example. A new inline function on every render would reset the ref and re-render forever.
const refSetters = Object.fromEntries(exampleOrder.map((name) => [
	name,
	(el: unknown) => {
		if (exampleRefs[name] !== el) {
			exampleRefs[name] = el as ExampleInstance | null;
		}
	},
])) as Record<ExampleName, (el: unknown) => void>;

function getTemplateCode(name: ExampleName): Docs.ExampleCode {
	return exampleRefs[name]?.exampleCode ?? { desc: undefined, name: undefined, script: '', template: '' };
}
</script>
