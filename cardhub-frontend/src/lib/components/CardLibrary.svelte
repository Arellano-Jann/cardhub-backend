<script>
    import Card from "./Card.svelte";
    import PlaceholderCard from "./PlaceholderCard.svelte";
    export let isListview = false;
    // dummyCards actually dummyDeck
    export let deck_obj = [
        {
            "cards-quantities": {length: 0}
        },
    ];
</script>

<div class="p-2 m-2">
    <!--<div class="">
        <button on:click={() => (isListview = !isListview)}>-->
            <!-- {isListview ? "Card View" : "List View"} -->
            <!--Toggle View
        </button>
    </div>-->
    {#if isListview}
        <div class="flex flex-col">
            {#each deck_obj["cards-quantities"] as card}
                <!-- add dynamic route later -->
                <a href="google.com">
                    <!--<div
                        class="border-black border-2 p-2 m-2
            flex flex-row justify-between align-middle"
                    >
                    
                    </div>-->
                    <PlaceholderCard card_obj={card} />
                </a>
            {/each}
        </div>
    {:else}
        <div class="flex width">
            {#each deck_obj["cards-quantities"] as card}
                <div class="relative flex-auto">
                    <div
                        class="absolute bg-red-500 text-white rounded-full p-2 text-sm h-9 w-9 text-center"
                        style="
                            right:5px;
                            top: -18px"
                    >
                        <p>{card.quantity}</p>
                    </div>
                    <!--<Card />-->
                    <PlaceholderCard card_obj={card} />
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>

</style>