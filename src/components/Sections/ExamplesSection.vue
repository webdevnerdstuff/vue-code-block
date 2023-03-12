<template>
	<div class="mb-5">
		<div class="row">
			<div class="col-12 mb-3">
				<h2>Examples</h2>
			</div>
		</div>

		<!-- ======================= Lang -->
		<LangExamples id="lang-examples" />

		<!-- ======================= Tabs -->
		<TabExamples id="tabs-examples" />

		<!-- ======================= Browser Window -->
		<BrowserWindowExamples id="browser-window-examples" />

		<!-- ======================= Prop Examples -->
		<OtherExamples id="prop-examples" />
	</div>
</template>

<script setup>
import {
	BrowserWindowExamples,
	LangExamples,
	OtherExamples,
	TabExamples,
} from '@/components/Examples';
</script>
