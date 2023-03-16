<template>
	<div class="footer-container container-fluid">
		<div class="container py-2">
			<footer
				class="d-flex flex-wrap justify-content-between align-items-center my-2"
			>
				<div class="col-md-4 d-flex align-items-center">
					<span class="mb-3 mb-md-0 text-muted">
						&copy; {{ year }} WebDevNerdStuff
					</span>
				</div>

				<ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
					<li class="ms-3">
						<a
							class="text-muted btn btn-link d-flex justify-content-center align-items-center"
							:href="links.github"
							role="button"
							target="_blank"
						>
							<fa-icon icon="fa-brands fa-github" />
						</a>
					</li>
					<li class="ms-3">
						<a
							class="text-muted btn btn-link d-flex justify-content-center align-items-center"
							:href="links.npm"
							role="button"
							target="_blank"
						>
							<fa-icon icon="fa-brands fa-npm" />
						</a>
					</li>
				</ul>
			</footer>
		</div>
	</div>
</template>


<script lang="ts" setup>
import { inject } from 'vue';

const links = inject('links');

const year = new Date().getFullYear();

</script>

<style lang="scss">
.footer-container {
	background-color: #000;
	color: #fff;

	.btn-link {
		border-radius: 50%;
		color: #fff;
		height: 40px;
		width: 40px;
	}
}

footer {
	//
}
</style>
