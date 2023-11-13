<template>
	<v-row>
		<v-col
			id="slots"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#slots"
				>#</a>
				Slots
			</h2>
		</v-col>

		<v-col cols="12">
			<v-card>
				<v-table
					class="slots-table"
					hide-default-footer
				>
					<thead>
						<tr>
							<th width="20%">Name</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<!-- ================================================== Copy Button -->
						<tr
							id="slots-copy-button"
							:class="rowClass"
						>
							<td>
								<span class="name-item text-mono ml-n2">
									<span class="text-primary">#</span>
									<a
										class="text-primary"
										:class="classes.appLink"
										href="#slots-copy-button"
									>copyButton</a>
								</span>
							</td>
							<td>
								Slot for the copy button inside the code block of the component.
							</td>
						</tr>
						<!-- <tr>
							<td colspan="2">
								<VCodeBlock
									:code="copyButtonSlotsCode"
									:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
									lang="typescript"
									:prismjs="codeBlockSettings.plugin === 'prismjs'"
									:theme="codeBlockSettings.theme"
								/>
							</td>
						</tr> -->

						<!-- ================================================== Label -->
						<tr
							id="slots-label"
							:class="rowClass"
						>
							<td>
								<span class="name-item text-mono ml-n2">
									<span class="text-primary">#</span>
									<a
										class="text-primary"
										:class="classes.appLink"
										href="#slots-label"
									>label</a>
								</span>
							</td>
							<td>
								Slot for the label of the component.
							</td>
						</tr>
						<!-- <tr>
							<td colspan="2">
								<VCodeBlock
									:code="labelSlotsCode"
									:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
									lang="typescript"
									:prismjs="codeBlockSettings.plugin === 'prismjs'"
									:theme="codeBlockSettings.theme"
								/>
							</td>
						</tr> -->

						<!-- ================================================== Tabs -->
						<tr
							id="slots-tabs"
							:class="rowClass"
						>
							<td>
								<span class="name-item text-mono ml-n2">
									<span class="text-primary">#</span>
									<a
										class="text-primary"
										:class="classes.appLink"
										href="#slots-tabs"
									>tabs</a>
								</span>
							</td>
							<td>
								Slot for the tabs of the component.
							</td>
						</tr>
						<!-- <tr>
							<td colspan="2">
								<VCodeBlock
									:code="tabsSlotsCode"
									:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
									lang="typescript"
									:prismjs="codeBlockSettings.plugin === 'prismjs'"
									:theme="codeBlockSettings.theme"
								/>
							</td>
						</tr> -->
					</tbody>
				</v-table>
			</v-card>
		</v-col>
	</v-row>
</template>

<script setup>
import { useTheme } from 'vuetify';
// import { useCoreStore } from '@/stores/index';

// const props = defineProps({
// 	codeBlockOptions: {
// 		required: true,
// 		type: Object,
// 	},
// });

// const codeBlockSettings = computed(() => props.codeBlockOptions);
// const store = useCoreStore();
const classes = inject('classes');
const theme = useTheme();
const isDark = ref(true);


watch(() => theme.global.current.value.dark, (val) => {
	isDark.value = val;
});

const rowClass = computed(() => {
	return isDark.value ? 'bg-grey-darken-3' : 'bg-grey-lighten-3';
});

// const copyButtonSlotsCode = `{

// }`;
// const labelSlotsCode = `{

// }`;
// const tabsSlotsCode = `{

// }`;


</script>

<style lang="scss">
.slots-table {
	td {
		line-height: 2rem !important;

		> div {
			padding: 0.5rem 0 !important;
		}
	}
}
</style>
