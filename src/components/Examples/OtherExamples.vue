<template>
	<div>
		<div class="row mb-2">
			<div class="col-12">
				<h5>Other Prop Examples</h5>
			</div>
		</div>

		<!-- ======================= Code Block Radius -->
		<div id="TBD-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="exampleCode"
					:code-block-radius="codeBlockRadius"
					lang="javascript"
					:show-tabs="false"
					:theme="selectedTheme"
				>
					<template #label>
						codeBlockRadius:
						<input v-model="codeBlockRadius" class="form-control" type="text" />
					</template>
				</CodeBlock>
			</div>
		</div>

		<!-- ======================= Copy Text -->
		<div id="TBD-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="exampleCode"
					:copyText="copyText"
					lang="javascript"
					:theme="selectedTheme"
				>
					<template #label>
						copyText:
						<input v-model="copyText" class="form-control" type="text" />
					</template>
				</CodeBlock>
			</div>
		</div>

		<!-- ======================= Floating Tabs -->
		<div id="TBD-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="exampleCode"
					:floating-tabs="floatingTabs"
					lang="javascript"
					:show-tabs="true"
					:theme="selectedTheme"
				>
					<template #label>
						<div class="form-check form-switch ms-1">
							<input
								v-model="floatingTabs"
								checked
								class="form-check-input"
								role="switch"
								type="checkbox"
							/>
							<label class="form-check-label">
								floatingTabs =
								<span class="boolean-style">{{ floatingTabs }}</span>
							</label>
						</div>
					</template>
				</CodeBlock>
			</div>
		</div>

		<!-- ======================= Height-->
		<div id="height-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="exampleCode"
					:height="height"
					lang="javascript"
					:show-tabs="false"
					:theme="selectedTheme"
				>
					<template #label>
						height:
						<input v-model="height" class="form-control" type="number" />
					</template>
				</CodeBlock>
			</div>
		</div>

		<!-- ======================= Indent-->
		<!-- TODO: Need to get this working -->
		<!-- <div id="indent-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="exampleJson"
					:indent="indent"
					lang="json"
					:show-tabs="false"
					:theme="selectedTheme"
				>
					<template #label>
						indent:
						<input v-model="indent" class="form-control" type="number" />
					</template>
				</CodeBlock>
			</div>
		</div> -->

		<!-- ======================= Tab Gap -->
		<div id="height-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="exampleCode"
					lang="javascript"
					:show-run-tab="true"
					:tab-gap="tabGap"
					:theme="selectedTheme"
				>
					<template #label>
						tabGap:
						<input v-model="tabGap" class="form-control" type="text" />
					</template>
				</CodeBlock>
			</div>
		</div>
	</div>
</template>

<script setup>
import { inject, ref } from 'vue';


const selectedTheme = inject('selectedTheme');

const exampleCode = `const foo = 'bar';`;
// const exampleJson = `{
//   "name": "John Doe",
//   "age": 30,
//   "isMarried": false,
//   "hobbies": ["reading", "hiking", "coding"],
//   "address": {
//     "street": "123 Main St",
//     "city": "Anytown",
//     "state": "CA",
//     "zip": "12345"
//   }
// }
// `;

const codeBlockRadius = ref('0 1em');
const floatingTabs = ref(false);
const copyText = ref('Copy Text');
const height = ref('200');
// const indent = ref('0');
const tabGap = ref('0.25rem');

</script>

<style lang="scss" scoped>
</style>
