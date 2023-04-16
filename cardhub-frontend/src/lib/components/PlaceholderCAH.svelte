<script>
	export let card_obj;
</script>

<!-- does not currently make any distinction between white and black cards -->
<div class="PlaceholderCAH border-2 border-black border-black bg-neutral-800"
	style="width: {card_obj["card"]["dimensions"][0]}px; height: {card_obj["card"]["dimensions"][1]}px"
>


	<div class="main-text">
		<p>{card_obj["card"]["properties"]["text"]}</p>
	</div>
	<div class="card-footer">
		<img src="src/lib/assets/cards_against_humanity/footers/question.svg" style="height:40px; width:80px; float:left" alt="logo">
	</div>
</div>

<style lang="css">
	.PlaceholderCAH {
		display: grid;
		border-radius: 6px;
		padding:3px;
		color:white;
		
		font-weight:500;
		font-family:"Arial";
	}
	.main-text {
		font-size: 13px;
	}
	.card-footer {
		font-size: 8px;
	}
</style>