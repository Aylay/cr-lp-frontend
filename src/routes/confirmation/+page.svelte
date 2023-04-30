<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import '../../app.css';
	import Logo from '$lib/components/svg/Logo.svelte';
	import LpFooter from '$lib/components/block/layout/LPFooter.svelte';

let isInView: boolean;
const options: Options = {
	unobserveOnEnter: true,
	rootMargin: '-200px'
};

const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
	isInView = detail.inView;
};
</script>

<svelte:head>
	<title>Abonnement Cafés Richard, expert café pour vos bureaux</title>
	<meta name="title" content="Abonnement Cafés Richard, expert café pour vos bureaux" />
	<meta property="og:title" content="Abonnement Cafés Richard, expert café pour vos bureaux" />
	<meta
		name="description"
		content="Cafés Richard vous propose un abonnement en café grains, POD ou capsule qui associe la machine à café, le café et les services tout compris. Abonnez-vous en toute sérénité à nos solutions café pour une pause-café au bureau tout compris."
	/>
	<meta
		property="og:description"
		content="Cafés Richard vous propose un abonnement en café grains, POD ou capsule qui associe la machine à café, le café et les services tout compris. Abonnez-vous en toute sérénité à nos solutions café pour une pause-café au bureau tout compris."
	/>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div
	class="relative items-center justify-center lg:flex lg:h-screen"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div class="absolute inset-0 -z-10 h-full w-full max-lg:hidden">
		{#if isInView}
			<img
				src="/img/ocs-cafes-richard.jpg"
				alt="Cafés Richard"
				class="h-full w-full object-cover {isInView ? 'animate-fade' : 'opacity-0'}"
			/>
		{/if}
	</div>
	<div class="big container absolute inset-x-0 top-8 z-0 max-lg:hidden">
		<Logo newClass="max-w-[20rem] w-full h-auto" />
	</div>

	<div class="big container flex items-center justify-between">
		<div class="relative flex flex-col max-lg:px-10 max-lg:pb-40 max-lg:pt-5">
			<div class="absolute inset-0 -z-10 h-full w-full lg:hidden">
				{#if isInView}
					<img
						src="/img/ocs-cafes-richard-mobile.jpg"
						alt="Cafés Richard"
						class="h-full w-full object-cover {isInView ? 'animate-fade' : 'opacity-0'}"
					/>
				{/if}
			</div>
			<Logo newClass="max-w-[15rem] w-full h-auto mx-auto lg:hidden" />

			<h1
				class="text-[3rem] font-bold leading-[3.5rem] text-white max-lg:mt-16 max-lg:text-center lg:text-[7rem] lg:leading-[8.4rem] {isInView
					? 'animate-fade-right'
					: 'opacity-0'}"
			>
				<span class="relative inline-block bg-crimson px-6 pb-2 lg:px-8 lg:pb-4">La pause-café</span
				><br />avec Cafés Richard
			</h1>
			<h2
				class="mt-8 font-highlight text-[1.6rem] font-bold italic leading-[1.2rem] text-white max-lg:text-center lg:text-[2.5rem] lg:leading-[2.2rem] {isInView
					? 'animate-fade-right'
					: 'opacity-0'}"
			>
				Merci pour votre demande d'information
			</h2>
			<p
				class="mt-16 text-[1.5rem] leading-[1.8rem] text-white max-lg:px-12 max-lg:text-center lg:text-[1.6rem] lg:leading-[2.2rem] {isInView
					? 'animate-fade-right'
					: 'opacity-0'}"
			>
				Nous vous recontacterons dans les plus brefs délais.
			</p>
		</div>
	</div>
</div>


<LpFooter />
