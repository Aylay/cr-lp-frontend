<script lang="ts">
	import Logo from '$lib/components/svg/Logo.svelte';
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import LpFooter from '$lib/components/block/layout/LPFooter.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '0px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};
</script>

<svelte:head>
	<title>Mentions légales | Cafés Richard</title>
	<meta name="title" content="Mentions légales | Cafés Richard" />
	<meta property="og:title" content="Mentions légales | Cafés Richard" />
	<meta name="description" content="" />
	<meta property="og:description" content="" />
</svelte:head>

<div class="relative" use:inview={options} on:inview_change={handleChange}>
	<div class="inset-x-0 top-0 -z-10 h-[60rem] w-full">
		{#if isInView}
			<img
				src="/img/img-legals.jpg"
				alt="Personnes buvant des cafés dans un bureau"
				class="h-full w-full object-cover max-lg:object-[22.5%] {isInView
					? 'animate-fade'
					: 'opacity-0'}"
			/>
		{/if}
	</div>
	<div class="absolute inset-x-0 top-8 w-full">
		<div
			class="container flex items-center justify-between max-lg:flex-col max-lg:gap-6 max-lg:px-8"
		>
			<Logo newClass="max-w-[20rem] w-full h-auto max-lg:max-w-[15rem]" />
			<div>
				<a
					class="inline-block cursor-pointer rounded-[2.5rem] bg-crimson px-12 py-6 text-center text-[1.4rem] font-semibold leading-[1.9rem] text-white transition-colors hover:bg-black lg:text-[1.6rem]"
					title="Demandez-nous un devis personnalisé"
					href="/"
				>
					Demandez-nous un devis personnalisé
				</a>
			</div>
		</div>
	</div>
	<div class="container mt-16 max-lg:px-8 lg:mt-32">
		<h1
			class="relative mb-8 text-[2.8rem] font-bold leading-[3.2rem] text-crimson lg:text-[3.8rem] lg:leading-[4.56rem]"
		>
			Mentions légales
		</h1>
		<p
			class="relative mb-16 text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]"
		>
			Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004
			pour la Confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance des
			utilisateurs et visiteurs du site abonnement.cafesrichard.fr les informations suivantes :
		</p>

		<h2 class="mb-6 font-highlight text-[2rem] font-bold leading-[3rem] lg:text-[2.5rem]">
			<span class="text-crimson">1.</span> Informations légales
		</h2>
		<h3 class="mb-6 font-highlight text-[1.8rem] font-bold leading-[2.4rem] lg:text-[2rem]">
			<span class="text-crimson">1.1.</span> Editeur du Site
		</h3>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			<span class="font-semibold">Raison sociale :</span> Cafés Richard
		</p>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			<span class="font-semibold">Adresse du siège social :</span> 106 Rue du Fossé blanc
		</p>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			<span class="font-semibold">Code postal :</span> 92230
		</p>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			<span class="font-semibold">Ville :</span> Gennevilliers
		</p>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			<span class="font-semibold">Tél. :</span> 01 40 85 75 00
		</p>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			<span class="font-semibold">Forme juridique :</span> SAS
		</p>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			<span class="font-semibold">Montant du capital social :</span> 32.524.648 Euros
		</p>

		<h3 class="mb-6 mt-12 font-highlight text-[1.8rem] font-bold leading-[2.4rem] lg:text-[2rem]">
			<span class="text-crimson">1.2.</span> Activité
		</h3>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			<span class="font-semibold"
				>Numéro d'inscription au registre du commerce et des sociétés :</span
			> RCS Nanterre B 432 573 467
		</p>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			<span class="font-semibold">N° TVA intracommunautaire :</span> FR93 432 573 467
		</p>

		<h3 class="mb-6 mt-12 font-highlight text-[1.8rem] font-bold leading-[2.4rem] lg:text-[2rem]">
			<span class="text-crimson">1.3.</span> Site internet
		</h3>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			<span class="font-semibold">Le site internet est hébergé sur le domaine :</span> abonnement.cafesrichard.fr
		</p>

		<h3 class="mb-6 mt-12 font-highlight text-[1.8rem] font-bold leading-[2.4rem] lg:text-[2rem]">
			<span class="text-crimson">1.4.</span> Responsable de la publication
		</h3>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			<span class="font-semibold">Email :</span> ocs@richard.fr
		</p>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			<span class="font-semibold">Tél. :</span> 01 40 85 75 00
		</p>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			<span class="font-semibold">Représentant légal de l'entreprise :</span> Cafés Richard
		</p>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			<span class="font-semibold">Tribunal compétent en cas de litige :</span> Nanterre
		</p>

		<h3 class="mb-6 mt-12 font-highlight text-[1.8rem] font-bold leading-[2.4rem] lg:text-[2rem]">
			<span class="text-crimson">1.5.</span> Agence / Webmaster
		</h3>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			<a
				href="https://beavers-agency.fr"
				title="Beavers, l'agence digitale des castors"
				target="_blank"
				rel="external noreferrer"><span class="font-semibold">Entreprise :</span> Beavers</a
			>
		</p>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			<span class="font-semibold">Adresse. :</span> 28 rue de la font des anguilles
		</p>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			<span class="font-semibold">Code postal :</span> 83520
		</p>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			<span class="font-semibold">Ville :</span> Roquebrune sur Argens
		</p>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			<span class="font-semibold">Pays. :</span> France
		</p>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			<span class="font-semibold">Email :</span> les-castors@beavers-agency.fr
		</p>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			<span class="font-semibold">Tél. :</span> 06 64 64 44 70
		</p>

		<h3 class="mb-6 mt-12 font-highlight text-[1.8rem] font-bold leading-[2.4rem] lg:text-[2rem]">
			<span class="text-crimson">1.6.</span> Hébergement
		</h3>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			<span class="font-semibold">Entreprise :</span> Vercel Inc.
		</p>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			<span class="font-semibold">Adresse. :</span> 340 S Lemon Ave #4133 Walnut, CA 91789
		</p>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			<span class="font-semibold">Pays. :</span> Etats-Unis
		</p>

		<h2 class="mb-6 mt-12 font-highlight text-[2rem] font-bold leading-[3rem] lg:text-[2.5rem]">
			<span class="text-crimson">2.</span> Présentation et principe
		</h2>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			Est désigné ci-après : Utilisateur, tout internaute se connectant et utilisant le site
			susnommé : abonnement.cafesrichard.fr.<br /><br />
			Cafés Richard s’efforce de fournir sur le site abonnement.cafesrichard.fr les informations les
			plus précises et à jour possibles (sous réserve de modifications apportées depuis leur mise en
			ligne), mais ne saurait garantir l'exactitude, la complétude et l'actualité des informations diffusées
			sur son site, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent
			ces informations. En conséquence, l'internaute devra donc s'assurer de l'exactitude des informations
			et signaler toutes modifications du site qu'il jugerait utile. Cafés Richard n'est en aucun cas
			responsable de l'utilisation faite de ces informations, et de tout préjudice direct ou indirect
			pouvant en découler.
		</p>

		<h2 class="mb-6 mt-12 font-highlight text-[2rem] font-bold leading-[3rem] lg:text-[2.5rem]">
			<span class="text-crimson">3.</span> Accessibilité
		</h2>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			Le site abonnement.cafesrichard.fr est par principe accessible aux utilisateurs 24/24h, 7/7j,
			sauf interruption, programmée ou non, pour les besoins de sa maintenance ou en cas de force
			majeure. En cas d’impossibilité d’accès au service, Cafés Richard s’engage à faire son maximum
			afin de rétablir l’accès au service. N’étant soumis qu’à une obligation de moyen, Cafés
			Richard ne saurait être tenu pour responsable de tout dommage, quelle qu’en soit la nature,
			résultant d’une indisponibilité du service.
		</p>

		<h2 class="mb-6 mt-12 font-highlight text-[2rem] font-bold leading-[3rem] lg:text-[2.5rem]">
			<span class="text-crimson">4.</span> Propriété intellectuelle
		</h2>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			Cafés Richard est propriétaire exclusif de tous les droits de propriété intellectuelle ou
			détient les droits d’usage sur tous les éléments accessibles sur le site, tant sur la
			structure que sur les textes, images, graphismes, logo, icônes, sons, logiciels…<br /><br />
			Toute reproduction totale ou partielle du site abonnement.cafesrichard.fr, représentation, modification,
			publication, adaptation totale ou partielle de l'un quelconque de ces éléments est interdite, sauf
			autorisation écrite préalable de Cafés Richard. À défaut, elle sera considérée comme constitutive
			d’une contrefaçon et passible de poursuite conformément aux dispositions des articles L.335-2 et
			suivants du Code de Propriété Intellectuelle.
		</p>

		<h2 class="mb-6 mt-12 font-highlight text-[2rem] font-bold leading-[3rem] lg:text-[2.5rem]">
			<span class="text-crimson">5.</span> Liens hypertextes et cookies
		</h2>
		<h3 class="mb-6 font-highlight text-[1.8rem] font-bold leading-[2.4rem] lg:text-[2rem]">
			<span class="text-crimson">5.1.</span> Liens hypertexte
		</h3>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			Le site abonnement.cafesrichard.fr peut contenir un certain nombre de liens hypertextes vers
			d’autres sites. Cafés Richard ne dispose d'aucun moyen pour contrôler les sites en connexion
			avec son site internet et ne répond pas de la disponibilité de tels sites et sources externes,
			ni ne la garantit. Cafés Richard ne peut être tenue pour responsable de tout dommage, de
			quelque nature que ce soit, résultant du contenu de ces sites ou sources externes, et
			notamment des informations, produits ou services qu’ils proposent.<br /><br />
			Si vous naviguez vers un de ces sites, veuillez noter qu’ils possèdent leur propre politique de
			confidentialité et que notre responsabilité s’arrête au moment où vous quittez notre site.<br
			/><br />
			Les propriétaires de sites internet tiers ne peuvent mettre en place un hyperlien en direction
			de ce site sans l'autorisation expresse et préalable de Cafés Richard qui se réserve le droit d’accepter
			ou de refuser un hyperlien sans avoir à en justifier sa décision.
		</p>

		<h3 class="mb-6 mt-12 font-highlight text-[1.8rem] font-bold leading-[2.4rem] lg:text-[2rem]">
			<span class="text-crimson">5.2.</span> Cookies
		</h3>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			L’utilisateur est informé que lors de ses visites sur le site abonnement.cafesrichard.fr, un
			ou des cookies sont susceptibles de s’installer automatiquement sur son ordinateur par
			l'intermédiaire de son logiciel de navigation. Un cookie est un bloc de données qui ne permet
			pas d'identifier l'utilisateur, mais qui enregistre des informations relatives à la navigation
			de celui-ci sur le site. Il contient plusieurs données qui sont stockées sur votre ordinateur
			dans un simple fichier texte auquel un serveur accède pour lire et enregistrer des
			informations.<br /><br />
			Le paramétrage du logiciel de navigation permet d’informer de la présence de cookie et éventuellement,
			de la refuser de la manière décrite à l’adresse suivante : www.cnil.fr.
		</p>

		<h3 class="mb-6 mt-12 font-highlight text-[1.8rem] font-bold leading-[2.4rem] lg:text-[2rem]">
			<span class="text-crimson">5.3.</span> Les cookies tiers
		</h3>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			Notre site peut contenir des liens vers ou depuis des sites partenaires et d’autres sites
			tiers. Si vous naviguez vers un de ces sites, veuillez noter qu’ils possèdent leur propre
			politique de confidentialité et que notre responsabilité s’arrête au moment où vous quittez
			notre site. Vérifiez les politiques de confidentialité avant de transmettre vos données
			personnelles à des sites tiers.
		</p>

		<h2 class="mb-6 mt-12 font-highlight text-[2rem] font-bold leading-[3rem] lg:text-[2.5rem]">
			<span class="text-crimson">6.</span> Protection des biens et des personnes - gestion des données
			personnelles
		</h2>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			Le Client est informé des réglementations concernant la communication marketing, la loi du 21
			Juin 2014 pour la confiance dans l’Economie Numérique, la Loi Informatique et Liberté du 06
			Août 2004 ainsi que du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).
		</p>

		<h3 class="mb-6 mt-12 font-highlight text-[1.8rem] font-bold leading-[2.4rem] lg:text-[2rem]">
			<span class="text-crimson">6.1.</span> Responsables de la collecte des données personnelles
		</h3>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			Pour les Données Personnelles collectées dans le cadre de la création du compte personnel de
			l’Utilisateur et de sa navigation sur le Site, le responsable du traitement des Données
			Personnelles est : Cafés Richard. abonnement.cafesrichard.fr est représenté par Cafés Richard,
			son représentant légal.<br /><br />
			En tant que responsable du traitement des données qu’il collecte, abonnement.cafesrichard.fr s’engage
			à respecter le cadre des dispositions légales en vigueur. Il lui appartient notamment au Client
			d’établir les finalités de ses traitements de données, de fournir à ses prospects et clients, à
			partir de la collecte de leurs consentements, une information complète sur le traitement de leurs
			données personnelles et de maintenir un registre des traitements conforme à la réalité. Chaque
			fois que abonnement.cafesrichard.fr traite des Données Personnelles, abonnement.cafesrichard.fr
			prend toutes les mesures raisonnables pour s’assurer de l’exactitude et de la pertinence des Données
			Personnelles au regard des finalités pour lesquelles abonnement.cafesrichard.fr les traite.
		</p>

		<h3 class="mb-6 mt-12 font-highlight text-[1.8rem] font-bold leading-[2.4rem] lg:text-[2rem]">
			<span class="text-crimson">6.2.</span> Finalité des données collectées personnelles
		</h3>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			abonnement.cafesrichard.fr est susceptible de traiter tout ou partie des données :
		</p>
		<div class="flex flex-col">
			<div class="flex items-center gap-4">
				<div class="h-3 w-3 rounded-full bg-crimson" />
				<p
					class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]"
				>
					pour permettre la navigation sur le Site et la connexion à l'espace privée par
					l’utilisateur : données de connexion et d’utilisation du Site
				</p>
			</div>
			<div class="flex items-center gap-4">
				<div class="h-3 w-3 rounded-full bg-crimson" />
				<p
					class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]"
				>
					pour prévenir et lutter contre la fraude informatique (spamming, hacking…) : matériel
					informatique utilisé pour la navigation, l’adresse IP, pages visitées
				</p>
			</div>
			<div class="flex items-center gap-4">
				<div class="h-3 w-3 rounded-full bg-crimson" />
				<p
					class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]"
				>
					pour améliorer la navigation sur le Site : données de connexion et d’utilisation
				</p>
			</div>
		</div>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			abonnement.cafesrichard.fr ne commercialise pas vos données personnelles qui sont donc
			uniquement utilisées par nécessité ou à des fins statistiques et d’analyses.
		</p>

		<h2 class="mb-6 mt-12 font-highlight text-[2rem] font-bold leading-[3rem] lg:text-[2.5rem]">
			<span class="text-crimson">7.</span> Limitation de responsabilité
		</h2>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			Les informations contenues sur ce site sont aussi précises que possible et le site est
			périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou
			des lacunes. Si vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement,
			merci de bien vouloir le signaler par email en décrivant le problème de la manière la plus
			précise possible (page posant problème, action déclenchante, type d’ordinateur et de
			navigateur utilisé, …). abonnement.cafesrichard.fr ne peut pas être tenu responsable des
			lacunes, erreurs ou dysfonctionnement engendrés.<br /><br />
			Tout contenu téléchargé se fait aux risques et périls de l'utilisateur et sous sa seule responsabilité.
			Par conséquent, Cafés Richard ne saurait être tenu responsable d'un quelconque dommage subi par
			l'ordinateur de l'utilisateur ou d'une quelconque perte de données consécutives au téléchargement.<br
			/><br />
			Les liens hypertextes mis en place dans le cadre du présent site internet en direction d'autres
			ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de Cafés Richard.
		</p>
		<h2 class="mb-6 mt-12 font-highlight text-[2rem] font-bold leading-[3rem] lg:text-[2.5rem]">
			A propos des mentions légales
		</h2>
		<p class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]">
			Les mentions légales définies sur cette page s'appliquent à l'ensemble du présent site
			internet et sont susceptibles d'évoluer sans préavis. L'Utilisateur du site est donc invité à
			les consulter régulièrement afin d'en prendre connaissance.
		</p>
	</div>
</div>

<LpFooter />
