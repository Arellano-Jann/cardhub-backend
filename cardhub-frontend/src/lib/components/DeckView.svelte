<script>
    import PlaceholderCard from "./PlaceholderCard.svelte";
	// playing cards
	import playing_card_deck from "$lib/assets/playing_cards/deck.json"
	let playing_card_back = playing_card_deck["back_card"];
	//CAH
	import cards_against_humanity_deck from "$lib/assets/cards_against_humanity/deck.json"
	let cards_against_humanity_back = cards_against_humanity_deck["back_card"];
</script>
<div class="deckview" style="width:100p">
	<div class="deck-grid">
		<div class="placeholder-wrapper" on:click={() => alert('yo')}>
			<PlaceholderCard card_obj={playing_card_back} />
			<div>
				<h3 class="name">
					{playing_card_deck["display-properties"]["name"]}
				</h3>
				<p class="description">
					{playing_card_deck["display-properties"]["description"]}
				</p>
			</div>
		</div>
		<div class="placeholder-wrapper">
			<PlaceholderCard card_obj={playing_card_back} />
			<div>
				<h3 class="name">
					{playing_card_deck["display-properties"]["name"]}
				</h3>
				<p class="description">
					{playing_card_deck["display-properties"]["description"]}
				</p>
			</div>
		</div>
		<div class="placeholder-wrapper">
			<PlaceholderCard card_obj={playing_card_back} />
			<div>
				<h3 class="name">
					{playing_card_deck["display-properties"]["name"]}
				</h3>
				<p class="description">
					{playing_card_deck["display-properties"]["description"]}
				</p>
			</div>
		</div>
		<div class="placeholder-wrapper">
			<PlaceholderCard card_obj={playing_card_back} />
			<div>
				<h3 class="name">
					{playing_card_deck["display-properties"]["name"]}
				</h3>
				<p class="description">
					{playing_card_deck["display-properties"]["description"]}
				</p>
			</div>
		</div>
		<div class="placeholder-wrapper">
			<PlaceholderCard card_obj={playing_card_back} />
			<div>
				<h3 class="name">
					{playing_card_deck["display-properties"]["name"]}
				</h3>
				<p class="description">
					{playing_card_deck["display-properties"]["description"]}
				</p>
			</div>
		</div>

		<div class="placeholder-wrapper">
			<PlaceholderCard card_obj={cards_against_humanity_back} />
			<h3 class="name">
				{cards_against_humanity_deck["display-properties"]["name"]}
			</h3>
			<p class="description">
				{cards_against_humanity_deck["display-properties"]["description"]}
			</p>
		</div>
	</div>
</div>

<style>
	.deckview {
		/*background-color: blue;*/
	}
	.deck-grid {
		/*padding: 10px;*/
		display:block;
		display: grid;
  		grid-gap: 10px;
  		grid-template-columns: repeat(auto-fill, 140px);
	}
	.description {
		font-size: 10px;
	}
</style>