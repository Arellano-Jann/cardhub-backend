<script>
    // export let dummyLobbies = [
    //     {
    //         name: "gasdgasdg",
    //     },
    //     {
    //         name: "gasdgasdg",
    //     },
    //     {
    //         name: "gasdgasdg",
    //     },
    //     {
    //         name: "gasdgasdg",
    //     },
    //     {
    //         name: "gasdgasdg",
    //     },
    // ];
    import logo from "../../lib/assets/card_hub_logo.svg";
</script>

<main> 
    <div>
        <div style="text-align: center;">

            <img src={logo} alt="Card Hub Logo" style="display:inline" width="200"/>
            
        </div>
        <div class="mt-8 sm:mx-auto sm:w-full sm:mas-w-md width:200">
            <div class="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                <form class="mb-0 space-y-6" action="#" method="POST">
                    <div>
                        <!-- <label for="room-num" class="block text-sm font-medium font-medium text-gray-700">
                            Room Number
                        </label> -->
                        <div class="mt-1">
                            <input
                                id="room-num"
                                name="room-num"
                                type="text"
                                placeholder="Room Number"
                                autocomplete="room-num"
                                align="center"
                                required
                                class="appearance-none num block w-full px-3 py-2 border border-gray-300 roundedd shadow-sm placeholder-gra-my-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm text-black rounded-lg shadow-sm focus:outline-none focus:border-red-300 focus:ring focus:ring-red-200"
                            />
                            <label for="room-num" class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2"> Room Number </label>
                        </div>
                    </div>

                    <div> 
                        <!-- <label for="display-name" class="block text-sm font-medium font-medium text-gray-700">
                            Display Name
                        </label> -->
                        <div class="mt-1">
                            <input
                                id="display-name"
                                name="display-name"
                                type="text"
                                autocomplete="display-name"
                                placeholder="Enter Display Name"
                                required
                                class="appearance-none num block w-full px-3 py-2 border border-gray-300 roundedd shadow-sm placeholder-gra-my-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm text-black rounded-lg shadow-sm focus:outline-none focus:border-red-300 focus:ring focus:ring-red-200"
                            />
                        </div>
                    </div>

                    <div class="flex flex-row-reverse">
                        <button
                        class="w-full justify-center py-2 px-4 border-transparent rounded-md shadown-sm test-sm font-medium text-black bg-red-400 hover:bg-red-500 hover:text-white py-2 px-5 border-2 border-black rounded-lg"
                        >Join</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    


    <!-- <form method="POST">
        <div class="flex justify-between py-2">
          <label for="room-num"> Join Room </label>
          <input
            class="border-2 border-white text-black"
            name="room-num"
            type="text"/>
        </div>
        <div class="flex justify-between py-2">
          <label for="display-name text-black"> Display Name </label>
          <input
            class="border-2 border-white text-black"
            name="display-name"
            type="text"/>
        </div>
        <div class="flex flex-row-reverse">
          <button
            class="hover:bg-black hover:text-white py-2 px-5 border-2 border-white text-white"
            >Join</button>
        </div>
      </form> -->
    <!-- <div> -->
    <!-- <h1>Lobbies</h1>
    {#if dummyLobbies.length == 0}
        <div class="grid grid-cols-3 grid-rows-3">
            <div class="row-start-2 col-start-2 text-center">
                <h1>No Lobbies available :</h1>
            </div>
        </div>
    {:else}
        <div class="max-w-lg mx-auto">
            <div>
                <p>Lobby Name</p>
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
    </div> -->
</main>

<style>
    main{
        text-align: center;
        align-items: center;
        align-self: center;
        align-content: center;
        background-color: #1e1e1e;
        justify-content: center;
    }   

    .num {
        text-align: center;
        align-items: center;
        align-self: center;
        align-content: center;
    }
    
</style>