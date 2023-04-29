<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import HpAbonnement1 from './HPAbonnement1.svelte';
	import HpAbonnement2 from './HPAbonnement2.svelte';
	import HpAbonnement3 from './HPAbonnement3.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-200px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

	const prezOffers = [
		{
			img: {
				src: '/img/abonnement-grains.png',
				alt: 'Abonnement cafés en grains'
			},
			title: 'Cafés en grains',
			text: "<strong>L'expérience café en grains</strong> fraîchement moulu pour un résultat en tasse parfait.",
			slugTo: 'grains'
		},
		{
			img: {
				src: '/img/abonnement-pods.png',
				alt: 'Abonnement cafés pods'
			},
			title: 'Cafés Pods',
			text: '<strong>Plus de plaisir 100% Arabica</strong> pour découvrir différents arômes et corps de café.',
			slugTo: 'pods'
		},
		{
			img: {
				src: '/img/abonnement-premium.png',
				alt: 'Abonnement cafés premium'
			},
			title: 'Cafés Premium',
			text: '<strong>La richesse irrésistible des expressos</strong> pour une crème onctueuse et dense.',
			slugTo: 'premium'
		}
	];

	function getOffsetTop(slug: string) {
		let pulpe: any;
		pulpe = document.getElementById(slug);

		let offsetTop = 0;
		while (pulpe) {
			offsetTop += pulpe.offsetTop;
			pulpe = pulpe.offsetParent;
		}

		return offsetTop;
	}

	function scrollTo(slug: string) {
		const offsetTop = getOffsetTop(slug);

		window.scrollTo({
			top: offsetTop,
			behavior: 'smooth'
		});
	}
</script>

<div
	class="relative pt-16 max-lg:px-8 lg:pt-40"
	use:inview={options}
	on:inview_change={handleChange}
>
	{#if isInView}
		<img
			src="/img/feuille-cafe.png"
			alt="Feuille de café"
			class="absolute left-0 top-16 -z-10 h-auto max-w-[40rem] max-lg:hidden {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		/>
	{/if}

	<div class="container">
		<h2
			class="mb-32 text-center text-[3.8rem] font-bold leading-[4.8rem] lg:mb-44 lg:text-[5.5rem] lg:leading-[6.6rem]"
		>
			Abonnez-vous<br /><span class="font-highlight font-bold italic text-crimson"
				>avec Cafés Richard</span
			>
		</h2>

		<div class="flex justify-between gap-32 max-lg:flex-col max-lg:px-8 lg:gap-20">
			{#each prezOffers as offer, i}
				<div
					class="relative flex-1 rounded-lg border border-solid border-geyser px-6 pb-4 text-center {isInView
						? 'animate-fade'
						: 'opacity-0'}"
					style="animation-delay: {i * 250}ms;"
				>
					<div class="relative -top-16">
						<img
							src={offer.img.src}
							alt={offer.img.alt}
							class="mx-auto mb-4 h-auto w-full max-w-[22rem]"
						/>
						<p
							class="mb-2 text-[1.4rem] uppercase leading-[2.2rem] tracking-[.2rem] text-slate-gray"
						>
							Abonnement
						</p>
						<h3
							class="mb-8 text-[2.8rem] font-bold leading-[3.2rem] text-crimson lg:text-[3.8rem] lg:leading-[4.56rem]"
						>
							{offer.title}
						</h3>
						<p
							class="mb-12 px-16 text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]"
						>
							{@html offer.text}
						</p>
						<p
							class="inline-block cursor-pointer rounded-[2.5rem] bg-black px-12 py-6 text-center text-[1.4rem] font-semibold leading-[1.9rem] text-white transition-colors hover:bg-crimson lg:text-[1.6rem]"
							on:click={() => scrollTo(offer.slugTo)}
						>
							Découvrir l’offre
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<HpAbonnement1 />

<HpAbonnement2 />

<HpAbonnement3 />