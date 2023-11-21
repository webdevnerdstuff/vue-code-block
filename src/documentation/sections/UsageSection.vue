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
						:code="usageGlobal"
						:highlightjs="selectedLibrary.id === 'highlightjs'"
						label="Global Registration"
						lang="javascript"
						:prismjs="selectedLibrary.id === 'prismjs'"
						:theme="selectedTheme"
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
						:theme="selectedTheme"
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

const usageGlobal = `import { createApp } from 'vue';
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
