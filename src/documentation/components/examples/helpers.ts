/**
 * Code shown by the examples that demonstrate props rather than a language.
 */
export const sampleCode = `const greeting = 'Hello, World!';

function sayHello(name) {
  console.log(\`\${greeting} My name is \${name}.\`);
}

sayHello('Neon Bunny');`;


// Events go last, then sort by the attribute name without its binding prefix.
function compareAttrs(a: string, b: string): number {
	const aIsEvent = a.startsWith('@');
	const bIsEvent = b.startsWith('@');

	if (aIsEvent !== bIsEvent) {
		return aIsEvent ? 1 : -1;
	}

	return a.replace(/^[:@]/, '').localeCompare(b.replace(/^[:@]/, ''));
}


interface TemplateOptions {
	attrs: string[];
	library: string;
	slot?: string;
}

/**
 * Builds the Template snippet for an example, adding the attribute for the selected library.
 */
export function buildTemplateCode(options: TemplateOptions): string {
	const { attrs, library, slot } = options;
	const allAttrs = [...attrs, library].sort(compareAttrs);
	const attrLines = allAttrs.map((attr) => `    ${attr}`).join('\n');

	if (slot) {
		const slotLines = slot.split('\n').map((line) => `    ${line}`).join('\n');

		return `<template>
  <VCodeBlock
${attrLines}
  >
${slotLines}
  </VCodeBlock>
</template>`;
	}

	return `<template>
  <VCodeBlock
${attrLines}
  />
</template>`;
}


interface ScriptOptions {
	body?: string;
	code?: string;
	imports?: string[];
}

/**
 * Builds the Script snippet for an example. `code` becomes the `code` constant passed to VCodeBlock.
 */
export function buildScriptCode(options: ScriptOptions): string {
	const { body, code, imports = [] } = options;
	const parts: string[] = [];

	if (imports.length) {
		parts.push(imports.join('\n'));
	}

	if (code !== undefined) {
		const escapedCode = code.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
		parts.push(`const code = \`${escapedCode}\`;`);
	}

	if (body) {
		parts.push(body);
	}

	return `<script setup>
${parts.join('\n\n')}
</script>`;
}
