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
							Home
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
								<a class="dropdown-item" href="#ul-events">Events</a>
							</li>
							<li>
								<a class="dropdown-item" href="#ul-slots">Slots</a>
							</li>
							<li>
								<a class="dropdown-item" href="#ul-css-vars">CSS Variables</a>
							</li>

							<li>
								<a class="dropdown-item" href="#ul-examples">Examples</a>
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
				<div class="d-flex">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="nav-link" :href="links.github" target="_blank"
								>GitHub</a
							>
						</li>
						<li class="nav-item">
							<a class="nav-link" :href="links.npm" target="_blank"
								>NPM Package</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup>
import { inject } from 'vue';

const links = inject('links');
</script>
