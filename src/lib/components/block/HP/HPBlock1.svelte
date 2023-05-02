<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import Logo from '$lib/components/svg/Logo.svelte';
	import MachineCafe from '$lib/components/svg/MachineCafe.svelte';
	import CafeGrains from '$lib/components/svg/CafeGrains.svelte';
	import Service from '$lib/components/svg/Service.svelte';
	import LeadForm from '$lib/components/LeadForm.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-200px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};
</script>

<div
	class="relative items-center justify-center lg:flex lg:h-screen bg-black"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div class="absolute inset-0 h-full w-full max-lg:hidden">
		{#if isInView}
			<img
				src="/img/ocs-cafes-richard.jpg"
				alt="Cafés Richard"
				class="h-full w-full object-cover {isInView ? 'animate-fade' : 'opacity-0'}"
			/>
		{/if}
	</div>
	<div class="absolute left-1/2 top-8 z-10 -translate-x-1/2 transform max-lg:hidden">
		<Logo newClass="max-w-[16rem] 2xl:max-w-[20rem] w-full h-auto" />
	</div>

	<div class="big container flex items-center justify-between max-lg:flex-col lg:gap-56">
		<div class="relative flex flex-1 flex-col max-lg:px-10 max-lg:pb-20 max-lg:pt-5">
			<div class="absolute inset-0 h-full w-full lg:hidden">
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
				Plus qu’une pause, un gain de productivité !
			</h2>
			<p
				class="mt-16 text-[1.5rem] leading-[1.8rem] text-white max-lg:px-12 max-lg:text-center lg:text-[1.6rem] lg:leading-[2.2rem] {isInView
					? 'animate-fade-right'
					: 'opacity-0'}"
			>
				La pause-café offre de nombreux bienfaits, à commencer par le renforcement de l'esprit
				d’équipe ! Au sein de votre salle de pause-café, vous véhiculez aussi vos valeurs en
				fidélisant vos collaborateurs, et renforçant ainsi votre marque employeur.<br />
				Véritable team-builder, avec la pause-café Richard, les idées fusent !
			</p>
			<div class="mt-16 flex justify-between gap-8 lg:mt-32">
				<div
					class="flex items-center gap-5 animate-delay-[250ms] max-lg:flex-col {isInView
						? 'animate-fade'
						: 'opacity-0'}"
				>
					<div
						class="flex h-24 w-24 items-center justify-center rounded-full bg-crimson lg:h-28 lg:w-28"
					>
						<MachineCafe
							color="fill-white"
							newClass="w-full max-w-[3.4rem] lg:max-w-[4.4rem] h-auto"
						/>
					</div>
					<p
						class="flex-1 font-highlight text-[1.3rem] font-bold leading-[1.6rem] text-white max-lg:text-center lg:text-[1.6rem] lg:leading-[1.9rem]"
					>
						Machine à café<br />professionnelle
					</p>
				</div>
				<div
					class="flex items-center gap-5 animate-delay-500 max-lg:flex-col {isInView
						? 'animate-fade'
						: 'opacity-0'}"
				>
					<div
						class="flex h-24 w-24 items-center justify-center rounded-full bg-crimson lg:h-28 lg:w-28"
					>
						<CafeGrains
							color="fill-white"
							newClass="w-full max-w-[3.4rem] lg:max-w-[4.4rem] h-auto"
						/>
					</div>
					<p
						class="flex-1 font-highlight text-[1.3rem] font-bold leading-[1.6rem] text-white max-lg:text-center lg:text-[1.6rem] lg:leading-[1.9rem]"
					>
						Sélection de<br />cafés de qualité
					</p>
				</div>
				<div
					class="flex items-center gap-5 animate-delay-[750ms] max-lg:flex-col {isInView
						? 'animate-fade'
						: 'opacity-0'}"
				>
					<div
						class="flex h-24 w-24 items-center justify-center rounded-full bg-crimson lg:h-28 lg:w-28"
					>
						<Service color="fill-white" newClass="w-full max-w-[3.6rem] lg:max-w-[5rem] h-auto" />
					</div>
					<p
						class="flex-1 font-highlight text-[1.3rem] font-bold leading-[1.6rem] text-white max-lg:text-center lg:text-[1.6rem] lg:leading-[1.9rem]"
					>
						Services<br />tout inclus
					</p>
				</div>
			</div>
		</div>
		<div class="w-full max-w-[55rem] max-lg:bg-crimson max-lg:px-8 max-lg:py-14">
			<LeadForm />
		</div>
	</div>
</div>
