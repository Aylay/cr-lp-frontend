<script lang="ts">
	export let error: boolean;
	export let content: string;
	export let value = '';
</script>

<div class="flex flex-1 flex-col gap-2">
	<label for={content.replace(/\s/g, "-")} class="text-[1.4rem] leading-[1.7rem] {error
		? 'text-crimson'
		: 'text-slate-gray'}">
		{content}<sup class="text-crimson"> *</sup>
	</label>
	<input
		bind:value
		type="text"
		id={content.replace(/\s/g, "-")}
		class="w-full rounded-3xl border-[2px] border-solid px-6 py-5 text-[1.6rem] font-semibold leading-[1.9rem] focus-visible:outline-black {error
			? 'border-crimson'
			: 'border-geyser'}"
	/>
</div>
