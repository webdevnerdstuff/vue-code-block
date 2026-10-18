<template>
	<VCodeBlock
		:code="code"
		:highlightjs="codeBlockSettings.plugin.id === 'highlightjs'"
		lang="typescript"
		:max-height="codeBlockSettings.preHeight"
		:prismjs="codeBlockSettings.plugin.id === 'prismjs'"
		:theme="codeBlockSettings.theme"
	/>
</template>

<script setup lang="ts">
import { buildScriptCode, buildTemplateCode } from './helpers';

const codeBlockSettings = inject<Docs.CodeBlockSettings>('codeBlockSettings')!;

const code = `class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public sayHello() {
    console.log(\`Hello, my name is \${this.name} and I'm \${this.age} years old.\`);
  }
}

const person = new Person("John Doe", 30);
person.sayHello();`;

const exampleCode = computed<Docs.ExampleCode>(() => ({
	desc: codeBlockSettings.plugin.id === 'prismjs' ?
		'PrismJS does not load all languages by default. To highlight TypeScript, import <code class="ic">prismjs/components/prism-typescript</code>.' :
		'Highlight.js languages are all loaded by the component, so TypeScript works without any extra imports.',
	name: 'TypeScript',
	script: buildScriptCode({
		code,
		imports: codeBlockSettings.plugin.id === 'prismjs' ? ["import 'prismjs/components/prism-typescript';"] : undefined,
	}),
	template: buildTemplateCode({
		attrs: [
			':code="code"',
			'lang="typescript"',
		],
		library: codeBlockSettings.plugin.id,
	}),
}));

defineExpose({ exampleCode });
</script>
