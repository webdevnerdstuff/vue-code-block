<template>
	<div class="row mb-5">
		<div :class="styleData.h2ColClass">
			<h2>Plugin Options</h2>
		</div>

		<div class="col-12 mb-3">
			<div class="table-responsive">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th>Name</th>
							<th>Type</th>
							<th>Default</th>
							<th>Options</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td valign="top">defaultStyles</td>
							<td class="option-type" valign="top">Object</td>
							<td valign="top"></td>
							<td valign="top"></td>
							<td valign="top">{{ copyData.defaultStyles }}</td>
						</tr>
						<tr>
							<td valign="top">disabled</td>
							<td class="option-type" valign="top">Boolean</td>
							<td class="boolean-style" valign="top">false</td>
							<td valign="top" v-html="pluginOptionsData.boolean"></td>
							<td valign="top">{{ copyData.disabled }}</td>
						</tr>
						<tr>
							<td valign="top">logPrefix</td>
							<td class="option-type" valign="top">Boolean | String</td>
							<td class="boolean-style" valign="top">false</td>
							<td valign="top">-</td>
							<td valign="top">{{ copyData.logPrefix }}</td>
						</tr>
						<tr>
							<td valign="top">styles</td>
							<td class="option-type" valign="top">String | Array</td>
							<td valign="top">-</td>
							<td valign="top" v-html="pluginOptionsData.styles"></td>
							<td valign="top">{{ copyData.styles }}</td>
						</tr>
						<tr>
							<td valign="top">type</td>
							<td class="option-type" valign="top">String</td>
							<td valign="top">log</td>
							<td valign="top" v-html="pluginOptionsData.type"></td>
							<td valign="top">{{ copyData.type }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- ======================= Plugin Option Overriding -->
		<div class="col-12">
			<CodeBlock
				:code="overrideOptionsCode"
				label="Overriding the plugin default options"
				lang="javascript"
				:showRunButton="false"
			>
				<template #label>
					<h5 class="mb-0">Overriding the plugin default options</h5>
				</template>
			</CodeBlock>
		</div>

		<div class="col-12">
			<svg style="display: none" xmlns="http://www.w3.org/2000/svg">
				<symbol
					id="exclamation-triangle-fill"
					fill="currentColor"
					viewBox="0 0 16 16"
				>
					<path
						d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
					/>
				</symbol>
			</svg>

			<div
				class="alert alert-primary d-flex align-items-center my-2"
				role="alert"
			>
				<svg
					aria-label="Info:"
					class="bi flex-shrink-0 me-2"
					height="24"
					role="img"
					width="24"
				>
					<use xlink:href="#exclamation-triangle-fill"></use>
				</svg>
				<div>
					It is recommended to set the <code>disabled</code> option to use a
					<span class="fst-italic">.env</span> variable when possible. This way
					you will not have your logs exposed to the public when on a production
					site.
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { inject } from 'vue';
import CodeBlock from '@/components/CodeBlock.vue';


const styleData = inject('styleData');
const copyData = inject('copyData');
const pluginOptionsData = inject('pluginOptionsData');


const overrideOptionsCode = `import { createApp } from 'vue';
import UnicornLog from 'vue3-unicorn-log';

const app = createApp(App);

app.use(UnicornLog, {
	logPrefix: '[OMG LOOK HERE!]:',
	disabled: process\u200b.env.UNICORN_LOG !== 'true',
	// ...other options
});

app.mount('#app');`;
</script>

<style lang="scss"></style>
