<template>
	<v-row>
		<v-col
			id="usage"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#usage"
				>#</a>
				Usage
			</h2>

			<v-row>
				<v-col cols="12">
					<VCodeBlock
						:code="usageGlobalPlugin"
						:highlightjs="selectedLibrary.id === 'highlightjs'"
						lang="javascript"
						:prismjs="selectedLibrary.id === 'prismjs'"
						:theme="selectedTheme"
					>
						<template #label>
							Global Plugin Registration
							<br>
							<i>Global options have a higher precedence and will override local props</i>
						</template>
					</VCodeBlock>
				</v-col>
			</v-row>

			<v-row>
				<v-col cols="12">
					<VCodeBlock
						:code="usageGlobalComponent"
						:highlightjs="selectedLibrary.id === 'highlightjs'"
						label="Global Component Registration"
						lang="javascript"
						:prismjs="selectedLibrary.id === 'prismjs'"
					/>
				</v-col>
			</v-row>

			<v-row>
				<v-col cols="12">
					<VCodeBlock
						:code="usageIndividual"
						:highlightjs="selectedLibrary.id === 'highlightjs'"
						label="Local Registration"
						lang="html"
						:prismjs="selectedLibrary.id === 'prismjs'"
					/>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script setup>
const classes = inject('classes');
const selectedLibrary = inject('selectedLibrary');
const selectedTheme = inject('selectedTheme');

const usageGlobalPlugin = `import { createApp } from 'vue';
import App from './App.vue';
import { createVCodeBlock } from '@wdns/vue-code-block';

const VCodeBlock = createVCodeBlock({
  // options
});

const app = createApp(App);

app.use(VCodeBlock);

app.mount('#app');`;

const usageGlobalComponent = `import { createApp } from 'vue';
import App from './App.vue';
import { VCodeBlock } from '@wdns/vue-code-block';

const app = createApp(App);

app.component('VCodeBlock', VCodeBlock);

app.mount('#app');`;

const usageIndividual = `<template>
  <VCodeBlock
    :code="code"
    highlightjs
    label="Hello World"
    lang="javascript"
    theme="neon-bunny"
  />
</template>

\<script setup\>
  import VCodeBlock from '@wdns/vue-code-block';

  const code = ref(\`const foo = 'bar';\`);
\</script\>`;
</script>
