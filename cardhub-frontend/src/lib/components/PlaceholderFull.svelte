<script>
	export let card_obj;
</script>

<div class="PlaceholderFull border-2 border-black"

style=
	"
	width: {card_obj["card"]["dimensions"][0]}px;
	height: {card_obj["card"]["dimensions"][1]}px;
	background-image: url({card_obj["card"]["properties"]["image"]});
	background-size: {card_obj["card"]["dimensions"][0]}px {card_obj["card"]["dimensions"][1]}px;
	background-position: top -2px right -2px;
	overflow: hidden;
	"
>

</div>

<style lang="css">
	.PlaceholderFull {
		display: grid;
		border-radius: 6px;
		padding:3px;
		color:black;
		
		font-weight:500;
		font-family:"Arial";
	}
</style>