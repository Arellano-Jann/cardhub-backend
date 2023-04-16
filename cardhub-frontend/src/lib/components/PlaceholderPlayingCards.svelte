<script>
	export let card_obj;
</script>


<div class="PlaceholderPlayingCards border-2 border-black border-black bg-blue-50"
	style="width: {card_obj["card"]["dimensions"][0]}px; height: {card_obj["card"]["dimensions"][1]}px"
>
	<div class="col"> <!-- left stuff -->
		<div class="right-side-up">
			<p class="corner-val col">
				{card_obj["card"]["properties"]["text"]}
			</p>
			<img src={card_obj["card"]["properties"]["small_image"]} alt="small">
		</div>
	</div>
	<div class="centerdiv bg-red-100"> <!-- center image-->
		<img src={card_obj["card"]["properties"]["image"]} alt="center">
	</div>
	<div class="right-col col"> <!-- right stuff -->
		<div class="upside-down">
			<p class="corner-val col">
				{card_obj["card"]["properties"]["text"]}
			</p>
			<img src={card_obj["card"]["properties"]["small_image"]} alt="small">
		</div>
	</div>
</div>

<style lang="css">
	.PlaceholderPlayingCards {
		display: grid;
		grid-template-columns: 1fr 3fr 1fr;
		border-radius: 6px;
		padding:3px;
	}
	.centerdiv {
		display: flex;
		justify-content: center;
		align-items: center;
		height:100%;
	}
	.corner-val {
		display:inline-block;
		font-size: 40px;
		margin:-15px 0px -15px 0px;
		font-weight:bold;
	}
	.right-col {
		position:relative;
	}
	.upside-down {
		position:absolute;
		bottom:0;
		transform: rotate(180deg);
	}
	.col {
		color:black;
	}
</style>