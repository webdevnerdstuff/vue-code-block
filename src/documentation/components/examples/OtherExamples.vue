<template>
	<v-row id="examples-other-props">
		<v-col cols="12">
			<h3 class="text-secondary">Other Prop Examples</h3>
		</v-col>
	</v-row>

	<!-- ======================= Code Block Radius -->
	<v-row id="radius-example">
		<v-col cols="12">
			<VCodeBlock
				:code="examples[selectedLibrary.id].copyBlockRadius"
				:code-block-radius="codeBlockRadius"
				:highlightjs="selectedLibrary.id === 'highlightjs'"
				lang="html"
				:prismjs="selectedLibrary.id === 'prismjs'"
				:theme="selectedTheme"
			>
				<template #label>
					codeBlockRadius:

					<v-text-field
						v-model="codeBlockRadius"
						density="compact"
						:style="{ width: fieldWidth }"
						variant="outlined"
					/>
				</template>
			</VCodeBlock>
		</v-col>
	</v-row>

	<!-- ======================= Copy Text -->
	<v-row id="copy-text-example">
		<v-col cols="12">
			<VCodeBlock
				:code="examples[selectedLibrary.id].copyText"
				copy-tab
				:copyText="copyText"
				:highlightjs="selectedLibrary.id === 'highlightjs'"
				lang="html"
				:prismjs="selectedLibrary.id === 'prismjs'"
				tabs
				:theme="selectedTheme"
			>
				<template #label>
					copyText:
					<v-text-field
						v-model="copyText"
						density="compact"
						:style="{ width: fieldWidth }"
						variant="outlined"
					/>
				</template>
			</VCodeBlock>
		</v-col>
	</v-row>

	<!-- ======================= Run Text -->
	<v-row id="run-text-example">
		<v-col cols="12">
			<VCodeBlock
				:code="examples[selectedLibrary.id].runText"
				:copy-tab="false"
				:highlightjs="selectedLibrary.id === 'highlightjs'"
				lang="html"
				:prismjs="selectedLibrary.id === 'prismjs'"
				run-tab
				:runText="runText"
				tabs
				:theme="selectedTheme"
				@run="runTextCodeExampleFunction"
			>
				<template #label>
					runText:
					<v-text-field
						v-model="runText"
						density="compact"
						:style="{ width: fieldWidth }"
						variant="outlined"
					/>
				</template>
			</VCodeBlock>
		</v-col>
	</v-row>

	<!-- ======================= Floating Tabs -->
	<v-row id="floating-tabs-example">
		<v-col cols="12">
			<VCodeBlock
				:code="examples[selectedLibrary.id].floatingTabs"
				:floating-tabs="floatingTabs"
				:highlightjs="selectedLibrary.id === 'highlightjs'"
				lang="html"
				:prismjs="selectedLibrary.id === 'prismjs'"
				tabs
				:theme="selectedTheme"
			>
				<template #label>
					<div class="form-check form-switch ms-1">
						<v-checkbox
							v-model="floatingTabs"
							color="primary"
							density="compact"
							label="floatingTabs"
							:style="{ width: fieldWidth }"
							variant="outlined"
						/>
					</div>
				</template>
			</VCodeBlock>
		</v-col>
	</v-row>

	<!-- ======================= Height-->
	<v-row id="height-example">
		<v-col cols="12">
			<VCodeBlock
				:code="examples[selectedLibrary.id].height"
				:height="height"
				:highlightjs="selectedLibrary.id === 'highlightjs'"
				lang="html"
				:prismjs="selectedLibrary.id === 'prismjs'"
				:theme="selectedTheme"
			>
				<template #label>
					height:
					<v-text-field
						v-model="height"
						density="compact"
						:style="{ width: fieldWidth }"
						type="number"
						variant="outlined"
					/>
				</template>
			</VCodeBlock>
		</v-col>
	</v-row>

	<!-- ======================= Tab Gap -->
	<v-row id="tab-gap-example">
		<v-col cols="12">
			<VCodeBlock
				:code="examples[selectedLibrary.id].tabGap"
				:highlightjs="selectedLibrary.id === 'highlightjs'"
				lang="html"
				:prismjs="selectedLibrary.id === 'prismjs'"
				:run-tab="true"
				:tab-gap="tabGap"
				tabs
				:theme="selectedTheme"
			>
				<template #label>
					tabGap:
					<v-text-field
						v-model="tabGap"
						density="compact"
						:style="{ width: fieldWidth }"
						variant="outlined"
					/>
				</template>
			</VCodeBlock>
		</v-col>
	</v-row>

	<!-- ======================= Indent-->
	<v-row id="indent-example">
		<v-col cols="12">
			<VCodeBlock
				:code="indentJsonExample"
				:highlightjs="selectedLibrary.id === 'highlightjs'"
				:indent="Number(indent)"
				lang="json"
				:prismjs="selectedLibrary.id === 'prismjs'"
				:theme="selectedTheme"
			>
				<template #label>
					indent (json):
					<v-text-field
						v-model="indent"
						density="compact"
						:style="{ width: fieldWidth }"
						type="number"
						variant="outlined"
					/>
				</template>
			</VCodeBlock>
		</v-col>
	</v-row>
</template>

<script setup>
const selectedLibrary = inject('selectedLibrary');
const selectedTheme = inject('selectedTheme');

const codeBlockRadius = ref('0 1em');
const copyText = ref('Copy Text');
const fieldWidth = ref('300px');
const floatingTabs = ref(true);
const height = ref('200');
const indent = ref(2);
const runText = ref('Run');
const tabGap = ref('0.25rem');

const examples = {
	prismjs: {
		copyBlockRadius: `<VCodeBlock
  :code="myCode"
  :code-block-radius="codeBlockRadius"
  lang="html"
  prismjs
>
  <template #label>
    codeBlockRadius:
    <input v-model="codeBlockRadius" type="text" />
  </template>
</VCodeBlock>`,
		copyText: `<VCodeBlock
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
</VCodeBlock>`,
		runText: `<VCodeBlock
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
</VCodeBlock>`,
		floatingTabs: `<VCodeBlock
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
</VCodeBlock>`,
		height: `<VCodeBlock
  :code="myCode"
  :height="height"
  lang="html"
  prismjs
>
  <template #label>
    height:
    <input v-model="height" type="number" />
  </template>
</VCodeBlock>`,
		tabGap: `<VCodeBlock
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
</VCodeBlock>`,
	},
	highlightjs: {
		copyBlockRadius: `<VCodeBlock
  :code="myCode"
  :code-block-radius="codeBlockRadius"
  highlightjs
  lang="html"
>
  <template #label>
    codeBlockRadius:
    <input v-model="codeBlockRadius" type="text" />
  </template>
</VCodeBlock>`,
		copyText: `<VCodeBlock
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
</VCodeBlock>`,
		runText: `<VCodeBlock
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
</VCodeBlock>`,
		floatingTabs: `<VCodeBlock
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
</VCodeBlock>`,
		height: `<VCodeBlock
  :code="myCode"
  :height="height"
  highlightjs
  lang="html"
>
  <template #label>
    height:
    <input v-model="height" type="number" />
  </template>
</VCodeBlock>`,
		tabGap: `<VCodeBlock
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
</VCodeBlock>`,
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
}`;


function runTextCodeExampleFunction() {
	alert('Run Text Code Example Function');
}
</script>


<style scoped lang="scss">
:deep(.v-input__details) {
	display: none;
}

.boolean-style {
	color: hsl(240 100% 50%) !important;
	font-weight: 500;
}
</style>
