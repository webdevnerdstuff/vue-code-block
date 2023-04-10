<template>
	<nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-black mb-5">
		<div class="container">
			<a class="navbar-brand" href="/vue3-code-block/">Vue 3 CodeBlock</a>
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
			<div id="navbarSupportedContent" class="collapse navbar-collapse">
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
					<li class="nav-item dropdown">
						<a
							id="docs-dropdown"
							aria-expanded="false"
							class="nav-link dropdown-toggle"
							data-bs-toggle="dropdown"
							href="#"
							role="button"
						>
							Docs
						</a>
						<ul
							aria-labelledby="docs-dropdown"
							class="dropdown-menu dropdown-menu-dark"
						>
							<li>
								<a class="dropdown-item" href="#ul-installation">
									Installation
								</a>
							</li>
							<li>
								<a class="dropdown-item" href="#ul-register-plugin"
									>Register Component</a
								>
							</li>
							<li>
								<a class="dropdown-item" href="#ul-props">Props</a>
							</li>
							<li>
								<a class="dropdown-item" href="#ul-themes">Themes</a>
							</li>
							<li>
								<a class="dropdown-item" href="#ul-events">Events</a>
							</li>
							<li>
								<a class="dropdown-item" href="#ul-slots">Slots</a>
							</li>
							<li>
								<a class="dropdown-item" href="#ul-examples">Examples</a>
							</li>
							<li>
								<a class="dropdown-item" href="#ul-css-vars">CSS Variables</a>
							</li>

							<li><hr class="dropdown-divider" /></li>

							<li><h6 class="dropdown-header">Info</h6></li>
							<li>
								<a class="dropdown-item" href="#ul-dependencies">
									Dependencies
								</a>
							</li>
							<li>
								<a class="dropdown-item" href="#ul-change-log">Change Log</a>
							</li>
							<li>
								<a class="dropdown-item" href="#ul-license">License</a>
							</li>
						</ul>
					</li>

					<!-- Examples -->
					<li class="nav-item dropdown">
						<a
							id="examples-dropdown"
							aria-expanded="false"
							class="nav-link dropdown-toggle"
							data-bs-toggle="dropdown"
							href="#"
							role="button"
						>
							Examples
						</a>
						<ul
							aria-labelledby="examples-dropdown"
							class="dropdown-menu dropdown-menu-dark"
						>
							<li>
								<a class="dropdown-item" href="#lang-examples">Languages</a>
							</li>
							<li>
								<a class="dropdown-item" href="#add-lang-examples">
									Additional Languages
								</a>
							</li>
							<li>
								<a class="dropdown-item" href="#plugin-examples">Plugins</a>
							</li>
							<li>
								<a class="dropdown-item" href="#tab-examples">Tabs</a>
							</li>
							<li>
								<a class="dropdown-item" href="#copy-button-examples">
									Copy Button
								</a>
							</li>
							<li>
								<a class="dropdown-item" href="#browser-window-examples">
									Browser Window
								</a>
							</li>
							<li>
								<a class="dropdown-item" href="#other-prop-examples">
									Other Props
								</a>
							</li>
						</ul>
					</li>
				</ul>
				<div class="d-flex my-2 me-2">
					<a
						:href="
							selectedLibrary.id === 'prism'
								? prismLinks.homepage
								: highlightJsLinks.homepage
						"
						target="_blank"
					>
						<span
							class="badge"
							:class="
								selectedLibrary.id === 'prism'
									? 'badge-prism'
									: 'badge-highlightjs'
							"
							>{{ selectedLibrary.label }} Active</span
						>
					</a>
				</div>
				<div class="d-flex">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="nav-link" :href="links.github" target="_blank">
								<fa-icon icon="fa-brands fa-github" /> GitHub
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" :href="links.npm" target="_blank">
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

defineProps({
	selectedLibrary: {
		type: Object,
		required: true,
	}
});

const links = inject('links');
const prismLinks = inject('prismLinks');
const highlightJsLinks = inject('highlightJsLinks');

const storedTheme = localStorage.getItem('theme');
const pageTheme = ref(storedTheme);

const getPreferredTheme = () => {
	if (storedTheme) {
		return storedTheme;
	}

	return 'dark';
};

const setTheme = function(theme) {
	if (theme === 'toggle') {
		pageTheme.value = pageTheme.value !== 'dark' ? 'dark' : 'light';
	}
	else {
		pageTheme.value = theme;
	}

	document.documentElement.setAttribute('data-bs-theme', pageTheme.value);
	localStorage.setItem('theme', pageTheme.value);
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
