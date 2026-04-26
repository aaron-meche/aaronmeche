<script>
	import '$lib/main.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import favicon from '$lib/assets/favicon.ico';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Aaron Meche</title>
	<meta name="description" content="Aaron Meche — Software Engineer, LSU c/o 2026" />
	<script src="https://kit.fontawesome.com/5cf062dc93.js" crossorigin="anonymous"></script>
</svelte:head>

<Navbar />

<div class="page">
	{@render children()}
</div>

<style>
	.page {
		padding-top: var(--navbar-height);
	}
</style>
