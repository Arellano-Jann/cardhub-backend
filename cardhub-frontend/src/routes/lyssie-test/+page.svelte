<script>
    import PlaceholderCard from "../../lib/components/PlaceholderCard.svelte";

	import deck_obj from "$lib/assets/card_structure.json"
    //import LyssieCardLibrary from "../../lib/components/CardLibrary/LyssieCardLibrary.svelte";
	let decks = deck_obj["decks"];
	let cah_cards = decks[0]["cards"]; 
	let playing_cards = decks[1]["cards"];
</script>
<div>

<PlaceholderCard card_obj={cah_cards[0]}/>
<PlaceholderCard card_obj={playing_cards[0]}/>

</div>

<h1> Card Library </h1>
<!--<LyssieCardLibrary cards={cah_cards} />-->
{#each {length: 3} as _, i}
    <li>{i + 1}</li>
{/each}