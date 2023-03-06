<template>
	<div class="mb-5">
		<div class="row">
			<div class="col-12 mb-3">
				<h2>Examples</h2>
				<p class="fst-italic">
					Open DevTools and click on the "Console" tab to view example results.
				</p>
			</div>
		</div>

		<!-- ======================= Basic -->
		<SimpleExample id="simple-examples" />

		<!-- ======================= Text Option -->
		<TextExample id="text-examples" />

		<!-- ======================= Type Option -->
		<TypeExample id="type-examples" />

		<!-- ======================= Styles Option -->
		<StylesExample id="styles-examples" />

		<!-- ======================= Disabled Option -->
		<DisabledExample id="disabled-examples" />

		<!-- ======================= Log Prefix Option -->
		<LogPrefixExample id="logPrefix-examples" />

		<!-- ======================= Magical Option -->
		<MagicalExample id="magical-examples" />

		<!-- ======================= Name Option -->
		<LogPrefixExample id="name-examples" :isNameOption="true" />

		<!-- ======================= Objects Option -->
		<ObjectsExample id="objects-examples" />

		<!-- ======================= Array Option -->
		<ArraysExample id="array-examples" />
	</div>
</template>

<script setup>
import {
	ArraysExample,
	DisabledExample,
	LogPrefixExample,
	MagicalExample,
	ObjectsExample,
	SimpleExample,
	StylesExample,
	TextExample,
	TypeExample,
} from '@/components/examples';
</script>
