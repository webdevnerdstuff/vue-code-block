<template>
	<div class="row mb-5">
		<div :class="styleData.h2ColClass">
			<h2>CSS Variables</h2>
		</div>

		<div class="col-12 mb-3">
			<p>
				You can find all CSS variables defined in the
				<code>src/plugin/styles/cssVariables.css</code> file. Colors are using
				<code>hsl</code> values.
			</p>
		</div>

		<div class="col-12 mb-3">
			<div class="table-responsive">
				<table class="table">
					<thead>
						<tr>
							<th width="auto">Name</th>
							<th>Value</th>
						</tr>
					</thead>

					<template v-for="section in cssVariables" :key="section.name">
						<tbody>
							<!-- Section Header Row -->
							<tr
								v-if="section.header"
								class="text-success-emphasis bg-success-subtle"
							>
								<th colspan="2">{{ section.name }}</th>
							</tr>

							<tr v-for="variable in section.items" :key="variable">
								<!-- Section Sub-Header Row -->
								<td
									v-if="variable.subHeader"
									class="text-dark-emphasis bg-dark-subtle"
									colspan="2"
									valign="top"
								>
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
];
</script>


<style lang="scss" scoped>
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
