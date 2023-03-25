<template>
	<div>
		<div class="row mb-2">
			<div class="col-12">
				<h5>Other Prop Examples</h5>
			</div>
		</div>

		<!-- ======================= Code Block Radius -->
		<div id="radius-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="examples[selectedLibrary.id].copyBlockRadius"
					:code-block-radius="codeBlockRadius"
					:highlightjs="selectedLibrary.id === 'highlightjs'"
					lang="html"
					:prismjs="selectedLibrary.id === 'prism'"
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
		<div id="copy-text-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="examples[selectedLibrary.id].copyText"
					copy-tab
					:copyText="copyText"
					:highlightjs="selectedLibrary.id === 'highlightjs'"
					lang="html"
					:prismjs="selectedLibrary.id === 'prism'"
					tabs
					:theme="selectedTheme"
				>
					<template #label>
						copyText:
						<input v-model="copyText" class="form-control" type="text" />
					</template>
				</CodeBlock>
			</div>
		</div>

		<!-- ======================= Run Text -->
		<div id="run-text-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="examples[selectedLibrary.id].runText"
					:copy-tab="false"
					:highlightjs="selectedLibrary.id === 'highlightjs'"
					lang="html"
					:prismjs="selectedLibrary.id === 'prism'"
					run-tab
					:runText="runText"
					tabs
					:theme="selectedTheme"
					@run="runTextCodeExampleFunction"
				>
					<template #label>
						runText:
						<input v-model="runText" class="form-control" type="text" />
					</template>
				</CodeBlock>
			</div>
		</div>

		<!-- ======================= Floating Tabs -->
		<div id="floating-tabs-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="examples[selectedLibrary.id].floatingTabs"
					:floating-tabs="floatingTabs"
					:highlightjs="selectedLibrary.id === 'highlightjs'"
					lang="html"
					:prismjs="selectedLibrary.id === 'prism'"
					tabs
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
							<label>
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
					:code="examples[selectedLibrary.id].height"
					:height="height"
					:highlightjs="selectedLibrary.id === 'highlightjs'"
					lang="html"
					:prismjs="selectedLibrary.id === 'prism'"
					:tabs="false"
					:theme="selectedTheme"
				>
					<template #label>
						height:
						<input v-model="height" class="form-control" type="number" />
					</template>
				</CodeBlock>
			</div>
		</div>

		<!-- ======================= Tab Gap -->
		<div id="height-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="examples[selectedLibrary.id].tabGap"
					:highlightjs="selectedLibrary.id === 'highlightjs'"
					lang="html"
					:prismjs="selectedLibrary.id === 'prism'"
					:run-tab="true"
					:tab-gap="tabGap"
					tabs
					:theme="selectedTheme"
				>
					<template #label>
						tabGap:
						<input v-model="tabGap" class="form-control" type="text" />
					</template>
				</CodeBlock>
			</div>
		</div>

		<!-- ======================= Indent-->
		<div id="indent-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="indentJsonExample"
					:highlightjs="selectedLibrary.id === 'highlightjs'"
					:indent="indent"
					lang="json"
					:prismjs="selectedLibrary.id === 'prism'"
					:tabs="false"
					:theme="selectedTheme"
				>
					<template #label>
						indent (json):
						<input v-model="indent" class="form-control" type="number" />
					</template>
				</CodeBlock>
			</div>
		</div>
	</div>
</template>

<script setup>
import { inject, ref } from 'vue';


const selectedLibrary = inject('selectedLibrary');
const selectedTheme = inject('selectedTheme');

const codeBlockRadius = ref('0 1em');
const copyText = ref('Copy Text');
const floatingTabs = ref(true);
const height = ref('200');
const indent = ref(2);
const runText = ref('Run');
const tabGap = ref('0.25rem');

const examples = {
	prism: {
		copyBlockRadius: `<CodeBlock
  :code="myCode"
  :code-block-radius="codeBlockRadius"
  lang="html"
  prismjs
>
  <template #label>
    codeBlockRadius:
    <input v-model="codeBlockRadius" type="text" />
  </template>
</CodeBlock>`,
		copyText: `<CodeBlock
  :code="myCode"
  copy-tab
  :copyText="copyText"
  lang="html"
  prismjs
  tabs
>
  <template #label>
    copyText:
    <input v-model="copyText" type="text" />
  </template>
</CodeBlock>`,
		runText: `<CodeBlock
  :code="runTextExample"
  :copy-tab="false"
  lang="html"
  run-tab
  :runText="runText"
  prismjs
  tabs
  :theme="selectedTheme"
  @run="runTextCodeExampleFunction"
>
  <template #label>
    runText:
    <input v-model="runText" type="text" />
  </template>
</CodeBlock>`,
		floatingTabs: `<CodeBlock
  :code="exampleCode"
  :floating-tabs="floatingTabs"
  lang="html"
  prismjs
  tabs
>
  <template #label>
    <input
      v-model="floatingTabs"
      checked
      type="checkbox"
    />
    <label>
      floatingTabs =
      <span class="boolean-style">{{ floatingTabs }}</span>
    </label>
  </template>
</CodeBlock>`,
		height: `<CodeBlock
  :code="myCode"
  :height="height"
  lang="html"
  prismjs
  :tabs="false"
>
  <template #label>
    height:
    <input v-model="height" type="number" />
  </template>
</CodeBlock>`,
		tabGap: `<CodeBlock
  :code="myCode"
  lang="html"
  :run-tab="true"
  prismjs
  :tab-gap="tabGap"
  tabs
>
  <template #label>
    tabGap:
    <input v-model="tabGap" type="text" />
  </template>
</CodeBlock>`,
	},
	highlightjs: {
		copyBlockRadius: `<CodeBlock
  :code="myCode"
  :code-block-radius="codeBlockRadius"
  highlightjs
  lang="html"
>
  <template #label>
    codeBlockRadius:
    <input v-model="codeBlockRadius" type="text" />
  </template>
</CodeBlock>`,
		copyText: `<CodeBlock
  :code="myCode"
  copy-tab
  :copyText="copyText"
  highlightjs
  lang="html"
  tabs
>
  <template #label>
    copyText:
    <input v-model="copyText" type="text" />
  </template>
</CodeBlock>`,
		runText: `<CodeBlock
  :code="runTextExample"
  :copy-tab="false"
  highlightjs
  lang="html"
  run-tab
  :runText="runText"
  tabs
  :theme="selectedTheme"
  @run="runTextCodeExampleFunction"
>
  <template #label>
    runText:
    <input v-model="runText" type="text" />
  </template>
</CodeBlock>`,
		floatingTabs: `<CodeBlock
  :code="exampleCode"
  :floating-tabs="floatingTabs"
  highlightjs
  lang="html"
  tabs
>
  <template #label>
    <input
      v-model="floatingTabs"
      checked
      type="checkbox"
    />
    <label>
      floatingTabs =
      <span class="boolean-style">{{ floatingTabs }}</span>
    </label>
  </template>
</CodeBlock>`,
		height: `<CodeBlock
  :code="myCode"
  :height="height"
  highlightjs
  lang="html"
  :tabs="false"
>
  <template #label>
    height:
    <input v-model="height" type="number" />
  </template>
</CodeBlock>`,
		tabGap: `<CodeBlock
  :code="myCode"
  highlightjs
  lang="html"
  :run-tab="true"
  :tab-gap="tabGap"
  tabs
>
  <template #label>
    tabGap:
    <input v-model="tabGap" type="text" />
  </template>
</CodeBlock>`,
	}
};
const indentJsonExample = `{
  "name": "John Doe",
  "age": 30,
  "isMarried": false,
  "hobbies": ["reading", "hiking", "coding"],
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zip": "12345"
  }
}
`;


function runTextCodeExampleFunction() {
	alert('Run Text Code Example Function');
}
</script>
