<script>
    export let dummyLobbies = [
        {
            name: "gasdgasdg",
        },
        {
            name: "gasdgasdg",
        },
        {
            name: "gasdgasdg",
        },
        {
            name: "gasdgasdg",
        },
        {
            name: "gasdgasdg",
        },
    ];
</script>

<div>
    {#if dummyLobbies.length == 0}
        <div class="grid grid-cols-3 grid-rows-3">
            <div class="row-start-2 col-start-2 text-center">
                <h1>No Lobbies available :(</h1>
            </div>
        </div>
    {:else}
        <div class="max-w-lg mx-auto">
            <div class="p-2">
                <p>Lobbies</p>
            </div>
            <div class="border-black border-2 p-5">
                {#each dummyLobbies as lobby}
                    <div class="flex justify-between">
                        <h1>{lobby.name}</h1>
                        <div>
                            <button
                                class="hover:bg-black
                        hover:text-white p-2
                        ">Join</button
                            >
                        </div>
                    </div>
                    <hr />
                {/each}
            </div>
        </div>
    {/if}
</div>
