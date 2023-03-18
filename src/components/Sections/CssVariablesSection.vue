<template>
	<div class="row mb-5">
		<div :class="styleData.h2ColClass">
			<h2>CSS Variables</h2>
		</div>

		<div class="col-12 mb-3">
			<p>
				All CSS variables are defined in the
				<code>src/plugin/styles/cssVariables.css</code> file. Colors are using
				<code>hsl</code> values.
			</p>
		</div>

		<div class="col-12 mb-3">
			<div class="table-responsive">
				<table class="table table-striped">
					<thead>
						<tr>
							<th width="auto">Name</th>
							<th>Value</th>
						</tr>
					</thead>

					<template v-for="section in cssVariables" :key="section.name">
						<tbody>
							<!-- Section Header Row -->
							<tr v-if="section.header" class="tbody-header-row">
								<th colspan="2">{{ section.name }}</th>
							</tr>

							<tr v-for="variable in section.items" :key="variable">
								<!-- Section Sub-Header Row -->
								<td v-if="variable.subHeader" colspan="2" valign="top">
									<strong
										><em>{{ variable.name }}</em></strong
									>
								</td>

								<!-- Section Items -->
								<template v-else>
									<td class="td-nowrap" valign="top">
										{{ variable.name }}
									</td>
									<td v-if="variable.hsl">
										<span
											v-if="variable.hsl"
											class="color-swatch"
											:style="`background-color: hsl(${variable.hsl});`"
										></span>
										{{ variable.hsl }}
									</td>
									<td v-else-if="variable.code" valign="top">
										<code>{{ variable.code }}</code>
									</td>
									<td v-else valign="top">
										{{ variable.value }}
									</td>
								</template>
							</tr>
						</tbody>
					</template>
				</table>
			</div>
		</div>
	</div>
</template>

<script setup>
import { inject } from 'vue';


const styleData = inject('styleData');

const cssVariables = [
	{
		name: 'Typography',
		header: true,
		items: [
			{
				name: '--v-cb-font',
				value: `system-ui, -apple-system, 'Segoe UI', 'Roboto',
		'Helvetica Neue', 'Arial', 'Noto Sans', 'Liberation Sans', sans-serif,
		'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
			},
			{
				name: '--v-cb-label-font',
				code: 'var(--v-cb-font)',
			},
			{
				name: '--v-cb-tab-font',
				code: 'var(--v-cb-font)',
			},
		]
	},
	{
		name: 'Neon Bunny Theme Colors',
		header: true,
		items: [
			// neon-bunny //
			{
				name: 'neon-bunny',
				subHeader: true,
			},
			{
				name: '--v-cb-tab-neon-bunny',
				hsl: '0 0% 0%',
			},
			{
				name: '--v-cb-tab-neon-bunny-text',
				hsl: '0 0% 100%',
			},
			{
				name: '--v-cb-tab-neon-bunny-icon',
				hsl: '207 100% 52%',
			},
			{
				name: '--v-cb-tab-neon-bunny-icon-success',
				hsl: '119 100% 51%',
			},
			{
				name: '--v-cb-tab-neon-bunny-icon-failed',
				hsl: '3 100% 58%',
			},
			// neon-bunny-carrot //
			{
				name: 'neon-bunny-carrot',
				subHeader: true,
			},
			{
				name: '--v-cb-tab-neon-bunny-carrot',
				hsl: '0 0% 0%',
			},
			{
				name: '--v-cb-tab-neon-bunny-carrot-text',
				hsl: '0 0% 100%',
			},
			{
				name: '--v-cb-tab-neon-bunny-carrot-icon',
				hsl: '292 100% 50%',
			},
			{
				name: '--v-cb-tab-neon-bunny-carrot-icon-success',
				hsl: '119 100% 51%',
			},
			{
				name: '--v-cb-tab-neon-bunny-carrot-icon-failed',
				hsl: '3 100% 58%',
			},
		]
	},
	{
		name: 'Prism Theme Colors',
		header: true,
		items: [
			// default //
			{
				name: 'default',
				subHeader: true,
			},
			{
				name: '--v-cb-tab-prism-default-bkg',
				hsl: '24 20% 95%',
			},
			{
				name: '--v-cb-tab-prism-default-text',
				hsl: '0 0% 0%',
			},
			{
				name: '--v-cb-tab-prism-default-icon',
				hsl: '198 100% 33%',
			},
			{
				name: '--v-cb-tab-prism-default-icon-success',
				hsl: '80 100% 30%',
			},
			{
				name: '--v-cb-tab-prism-default-icon-failed',
				hsl: '348 68% 58%',
			},
			// coy //
			{
				name: 'coy',
				subHeader: true,
			},
			{
				name: '--v-cb-tab-prism-coy-bkg',
				hsl: '205 59% 50%',
			},
			{
				name: '--v-cb-tab-prism-coy-text',
				hsl: '0 0% 0%',
			},
			{
				name: '--v-cb-tab-prism-coy-icon',
				hsl: '195 76% 41%',
			},
			{
				name: '--v-cb-tab-prism-coy-icon-success',
				hsl: '80 100% 30%',
			},
			{
				name: '--v-cb-tab-prism-coy-icon-failed',
				hsl: '0 64% 48%',
			},
			// dark //
			{
				name: 'dark',
				subHeader: true,
			},
			{
				name: '--v-cb-tab-prism-dark-bkg',
				hsl: '30 20% 25%',
			},
			{
				name: '--v-cb-tab-prism-dark-text',
				hsl: '0 0% 100%',
			},
			{
				name: '--v-cb-tab-prism-dark-border',
				hsl: '30 20% 40%',
			},
			{
				name: '--v-cb-tab-prism-dark-icon',
				hsl: '40 90% 60%',
			},
			{
				name: '--v-cb-tab-prism-dark-icon-success',
				hsl: '75 70% 60%',
			},
			{
				name: '--v-cb-tab-prism-dark-icon-failed',
				hsl: '0 100% 50%',
			},
			// funky //
			{
				name: 'funky',
				subHeader: true,
			},
			{
				name: '--v-cb-tab-prism-funky-bkg',
				hsl: '0 0% 80%',
			},
			{
				name: '--v-cb-tab-prism-funky-text',
				hsl: '0 0% 100%',
			},
			{
				name: '--v-cb-tab-prism-funky-dark',
				hsl: '0 0% 0%',
			},
			{
				name: '--v-cb-tab-prism-funky-icon',
				hsl: '328 100% 54%',
			},
			{
				name: '--v-cb-tab-prism-funky-icon-success',
				hsl: '80 61% 50%',
			},
			{
				name: '--v-cb-tab-prism-funky-icon-failed',
				hsl: '0 100% 50%',
			},
			// okaidia //
			{
				name: 'okaidia',
				subHeader: true,
			},
			{
				name: '--v-cb-tab-prism-okaidia-bkg',
				hsl: '70 8% 15%',
			},
			{
				name: '--v-cb-tab-prism-okaidia-text',
				hsl: '0 0% 100%',
			},
			{
				name: '--v-cb-tab-prism-okaidia-icon',
				hsl: '190 81% 67%',
			},
			{
				name: '--v-cb-tab-prism-okaidia-icon-success',
				hsl: '80 76% 53%',
			},
			{
				name: '--v-cb-tab-prism-okaidia-icon-failed',
				hsl: '338 95% 56%',
			},
			// solarizedlight //
			{
				name: 'solarizedlight',
				subHeader: true,
			},
			{
				name: '--v-cb-tab-prism-solarizedlight-bkg',
				hsl: '44 87% 94%',
			},
			{
				name: '--v-cb-tab-prism-solarizedlight-text',
				hsl: '196 13% 45%',
			},
			{
				name: '--v-cb-tab-prism-solarizedlight-icon',
				hsl: '175 59% 40%',
			},
			{
				name: '--v-cb-tab-prism-solarizedlight-icon-success',
				hsl: '68 100% 30%',
			},
			{
				name: '--v-cb-tab-prism-solarizedlight-icon-failed',
				hsl: '18 80% 44%',
			},
			// tomorrow //
			{
				name: 'tomorrow',
				subHeader: true,
			},
			{
				name: '--v-cb-tab-prism-tomorrow-bkg',
				hsl: '0 0% 18%',
			},
			{
				name: '--v-cb-tab-prism-tomorrow-text',
				hsl: '0 0% 80%',
			},
			{
				name: '--v-cb-tab-prism-tomorrow-icon',
				hsl: '299 34% 70%',
			},
			{
				name: '--v-cb-tab-prism-tomorrow-icon-success',
				hsl: '143 39% 64%',
			},
			{
				name: '--v-cb-tab-prism-tomorrow-icon-failed',
				hsl: '358 65% 68%',
			},
			// twilight //
			{
				name: 'twilight',
				subHeader: true,
			},
			{
				name: '--v-cb-tab-prism-twilight-bkg',
				hsl: '0 0% 8%',
			},
			{
				name: '--v-cb-tab-prism-twilight-text',
				hsl: '0 0% 80%',
			},
			{
				name: '--v-cb-tab-prism-twilight-border',
				hsl: '0 0% 33%',
			},
			{
				name: '--v-cb-tab-prism-twilight-icon',
				hsl: '53 89% 79%',
			},
			{
				name: '--v-cb-tab-prism-twilight-icon-success',
				hsl: '76 21% 52%',
			},
			{
				name: '--v-cb-tab-prism-twilight-icon-failed',
				hsl: '14 58% 55%',
			},
		]
	},
];
</script>


<style lang="scss" scoped>
.tbody-header-row {
	background-color: #f0fff0;
}

.td-nowrap {
	white-space: nowrap;
}

.color-swatch {
	border: 1px solid #ccc;
	border-radius: 50%;
	display: inline-block;
	height: 1rem;
	margin-right: 0.5rem;
	width: 1rem;
}
</style>
