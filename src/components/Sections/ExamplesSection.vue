<template>
	<div class="mb-5">
		<div class="row">
			<div class="col-12 mb-3">
				<h2>Examples</h2>
			</div>
		</div>

		<!-- ======================= Lang -->
		<LangExamples id="lang-examples" />

		<!-- ======================= Additional Lang -->
		<AdditionalLangExamples id="add-lang-examples" />

		<!-- ======================= Plugins -->
		<PluginExamples id="plugin-examples" />

		<!-- ======================= Tabs -->
		<TabExamples id="tab-examples" />

		<!-- ======================= Buttons -->
		<ButtonExamples id="copy-button-examples" />

		<!-- ======================= Browser Window -->
		<BrowserWindowExamples id="browser-window-examples" />

		<!-- ======================= Prop Examples -->
		<OtherExamples id="other-prop-examples" />
	</div>
</template>

<script setup>
import {
	AdditionalLangExamples,
	BrowserWindowExamples,
	ButtonExamples,
	LangExamples,
	OtherExamples,
	PluginExamples,
	TabExamples,
} from '@/components/Examples';
</script>
