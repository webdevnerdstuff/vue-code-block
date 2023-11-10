<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-black">
		<div class="container">
			<a
				class="navbar-brand"
				href="/vue3-code-block/"
			>Vue 3 CodeBlock</a>
			<button
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
				class="navbar-toggler"
				data-bs-target="#navbarSupportedContent"
				data-bs-toggle="collapse"
				type="button"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div
				id="navbarSupportedContent"
				class="collapse navbar-collapse"
			>
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a
							aria-current="page"
							class="nav-link active"
							href="/vue3-code-block/"
						>
							<fa-icon icon="fa-solid fa-house" />
						</a>
					</li>
				</ul>

				<div class="d-flex">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a
								class="nav-link"
								:href="links.github"
								target="_blank"
							>
								<fa-icon icon="fa-brands fa-github" /> GitHub
							</a>
						</li>
						<li class="nav-item">
							<a
								class="nav-link"
								:href="links.npm"
								target="_blank"
							>
								<fa-icon icon="fa-brands fa-npm" /> Package
							</a>
						</li>
						<li class="nav-item d-flex align-items-center ms-2">
							<fa-icon
								class="theme-switch fa-fw"
								:class="pageTheme === 'dark' ? 'moon' : 'sun'"
								:icon="pageTheme === 'dark' ? 'fa-moon' : 'fa-sun'"
								@click="setTheme('toggle')"
							/>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup>
import { inject, ref } from 'vue';
import { useCoreStore } from '@/stores/index';

defineProps({
	isPlayground: {
		type: Boolean,
		default: false,
	},
});

const links = inject('links');


const store = useCoreStore();
const storedTheme = localStorage.getItem('theme');
const pageTheme = ref(storedTheme);

const getPreferredTheme = () => {
	if (storedTheme) {
		return storedTheme;
	}

	return 'dark';
};

const setTheme = function(theme) {
	pageTheme.value = store.setTheme(theme, pageTheme.value);
};

setTheme(getPreferredTheme());
</script>

<style lang="scss">
.navbar {
	box-shadow: 2px 0 5px #fff;
}

.theme-switch {
	cursor: pointer;
	transform: rotate(0deg);
	transition: all 1s ease;

	&.moon {
		color: hsl(213 100% 67%);
	}

	&.sun {
		color: hsl(35 100% 67%);
		transform: rotate(180deg);
	}
}

.badge {
	&-prism {
		background-color: #39a1cf;
	}

	&-highlightjs {
		background-color: #600;
	}
}
</style>
