<script>
    import Card from "./Card.svelte";
    export let isListview = false;
    // dummyCards actually dummyDeck
    export let dummyCards = [
        {
            name: "asdgasha",
            description: "asdgsdga asdgasdgasg asdgasgd asdga",
            quantity: 5,
        },
        {
            name: "asdgasha",
            description: "asdgsdga asdgasdgasg asdgasgd asdga",
            quantity: 2,
        },
    ];
</script>

<div class="p-2 m-2">
    <div class="">
        <button on:click={() => (isListview = !isListview)}>
            <!-- {isListview ? "Card View" : "List View"} -->
            Toggle View
        </button>
    </div>
    {#if isListview}
        <div class="flex flex-col">
            {#each dummyCards as card}
                <!-- add dynamic route later -->
                <a href="google.com">
                    <div
                        class="border-black border-2 p-2 m-2
            flex flex-row justify-between align-middle"
                    >
                        <div class="">
                            <p class="">{card.name}</p>
                        </div>
                        <div class="hover:bg-black hover:text-white p-2">
                            <button>X</button>
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    {:else}
        <div class="flex">
            {#each dummyCards as card}
                <div class="relative">
                    <div
                        class="absolute right-4 top-1 bg-red-500 text-white rounded-full p-2 text-sm"
                    >
                        <p>{card.quantity}</p>
                    </div>
                    <Card />
                </div>
            {/each}
        </div>
    {/if}
</div>
