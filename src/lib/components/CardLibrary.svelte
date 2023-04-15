<script>
    export let dummyCards = [
        {
            name: "asdgsdg",
        },
        {
            name: "fhgjrjs",
        },
    ];
</script>

<div class="p-2 m-2">
    <h1>Card Library</h1>
    <div class="flex flex-col">
        {#each dummyCards as card}
            <!-- add dynamic route later -->
            <a href="#">
                <div
                    class="border-black border-2 p-2 m-2
            flex flex-row justify-between align-middle"
                >
                    <div class="">
                        <p class="my-a">{card.name}</p>
                    </div>
                    <div class="hover:bg-black hover:text-white p-2">
                        <button>X</button>
                    </div>
                </div>
            </a>
        {/each}
    </div>
</div>
