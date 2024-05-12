<template>
	<v-row>
		<v-col
			cols="12"
			lg="4"
			offset-lg="2"
			offset-xl="3"
			sm="12"
			xl="3"
		>
			<v-select
				v-model="library"
				data-cy="library-select"
				density="comfortable"
				item-value="id"
				:items="libraries"
				label="Library Selection"
				variant="outlined"
				@update:model-value="changeLibrary"
			>
			</v-select>
		</v-col>

		<v-col
			cols="12"
			lg="4"
			sm="12"
			xl="3"
		>
			<v-select
				v-model="theme"
				data-cy="theme-select"
				density="comfortable"
				item-value="id"
				:items="items"
				label="Theme Selection"
				variant="outlined"
				@update:model-value="changeTheme"
			>
			</v-select>
		</v-col>

		<v-col
			v-if="!playground"
			cols="12"
			lg="8"
			offset-lg="2"
			offset-xl="3"
			sm="12"
			xl="6"
		>
			<v-alert
				color="success"
				density="compact"
			>
				<v-icon
					color="white"
					icon="mdi:mdi-information"
				/>
				This will also update the examples and documentation below.
			</v-alert>
		</v-col>
	</v-row>
</template>


<script setup>
import { useCoreStore } from '@/stores/index';

const emit = defineEmits(['changedLibrary', 'changedTheme']);

defineProps({
	playground: {
		type: Boolean,
		default: false,
	}
});

const store = useCoreStore();

const highlightThemes = store.highlightThemes;
const libraries = ref(store.libraries);
const library = ref(libraries.value[1]);
const neonBunnyThemes = store.neonBunnyThemes;
const prismThemes = store.prismThemes;
const theme = ref('neon-bunny');


onMounted(() => {
	const storedValue = store.getLocalStorage() ?? store.setLocalStorage('prismjs');

	changeLibrary(storedValue ?? library.value.id);
});


const items = computed(() => {
	if (library.value === 'prismjs') {
		return [...neonBunnyThemes, ...prismThemes];
	}

	return [...neonBunnyThemes, ...highlightThemes];
});

function changeLibrary(val) {
	const libraryObj = libraries.value.find((item) => item.id === val);
	library.value = val;
	store.setLocalStorage(library.value);

	emit('changedLibrary', libraryObj);
	changeTheme('neon-bunny');
}

function changeTheme(val = 'neon-bunny') {
	theme.value = val;
	emit('changedTheme', theme.value);
}

</script>
