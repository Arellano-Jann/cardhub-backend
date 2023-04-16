<script>
	/*import {onMount} from "svelte";
	import {get} from "$lib/example.json.js";

	let data;
	onMount(async () => {
		data = await get();
	});*/
	
    import PlaceholderCah from "./PlaceholderCAH.svelte";
    import PlaceholderPlayingCards from "./PlaceholderPlayingCards.svelte";
	import PlaceholderFull from "./PlaceholderFull.svelte";

	import generic_card_obj from "$lib/assets/generic_card.json"
	export let card_obj = generic_card_obj;
	
    //import { add_styles } from "svelte/internal";
	// default card

	//import data from "$lib/example.json.js"

	

</script>

<!--
	
<div class="bg-blue-100">
	<p>Placeholder text</p>
	<p> {data["template_name"]}</p>
</div>
{data["dimensions"][0]}
<img src={img} height="{data["dimensions"][0]}px" width="{data["dimensions"][1]}px" alt="alt1">

<div class="bg-red-50 test">g</div>

-->


<div 
class="PlaceholderCard"
>
	{#if card_obj["card"]["template"] == "playing_cards"}
		<PlaceholderPlayingCards {card_obj} />
	{:else if card_obj["card"]["template"] == "cards_against_humanity"}
		<PlaceholderCah {card_obj} />
	{:else if card_obj["card"]["template"] == "full-image"}
		<PlaceholderFull {card_obj} />
	{:else}
		<p>in else</p>
	{/if}
</div>


