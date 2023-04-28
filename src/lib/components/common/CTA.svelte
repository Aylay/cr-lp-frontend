<script lang="ts">
	export let label: string;

	function scrollToForm() {
		let formProspect: any;
		formProspect = document.getElementById('prospectForm');

		let offsetTop = 0;
		while (formProspect) {
			offsetTop += formProspect.offsetTop;
			formProspect = formProspect.offsetParent;
		}

		window.scrollTo({
			top: offsetTop,
			behavior: 'smooth'
		});
	}
</script>

<div
	class="inline-block cursor-pointer rounded-[2.5rem] bg-crimson px-12 py-6 text-center text-[1.4rem] font-semibold leading-[1.9rem] text-white transition-colors hover:bg-black lg:text-[1.6rem]"
	title={label}
	on:click={() => scrollToForm()}
>
	{label}
</div>
