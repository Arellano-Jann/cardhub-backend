<script>
	//import cah_deck from "$"
	import DeckView from "$lib/components/DeckView.svelte"
	import CardLibrary from "$lib/components/CardLibrary.svelte"
	import Navbar from "../../lib/components/Navbar.svelte";
	import cah_deck_obj from "$lib/assets/cards_against_humanity/deck.json"
	import playing_card_deck_obj from "$lib/assets/playing_cards/deck.json"

</script>
<!--<Navbar />-->
<h1> Host game </h1>
<h2> Select Game to Play </h2>
<DeckView />
<h2> View Cards in Deck </h2>
<CardLibrary deck_obj={playing_card_deck_obj} />


<style>
	h1 {
		font-size: 3em;
		font-weight: bold;
	}
	h2 {
		font-size: 2em;
		font-weight: bold;
	}
</style>