<template>
	<!-- Copy Icon -->
	<svg
		v-if="icon === 'copy'"
		v-bind="$attrs"
		viewBox="0 0 512 512"
		xmlns="http://www.w3.org/2000/svg"
	>
		<!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
		<path
			d="M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z"
		/>
	</svg>

	<!-- Success Icon -->
	<svg
		v-else-if="icon === 'success'"
		v-bind="$attrs"
		viewBox="0 0 512 512"
		xmlns="http://www.w3.org/2000/svg"
	>
		<!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
		<path
			d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
		/>
	</svg>

	<!-- Failed Icon -->
	<svg
		v-else-if="icon === 'failed'"
		v-bind="$attrs"
		viewBox="0 0 320 512"
		xmlns="http://www.w3.org/2000/svg"
	>
		<!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
		<path
			d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
		/>
	</svg>
</template>

<script>


export default {
	name: 'StatusIcons',
	props: {
		icon: {
			type: String,
			required: true
		}
	},
	setup(props) {
		return {
			props,
		};
	}
};
</script>
