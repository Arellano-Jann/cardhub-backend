<script>
	// import logo from "../../lib/assets/card_hub_logo.svg";
	function moveJoin(){
    window.location.href = "/join";
  }

  function moveHost(){
    window.location.href = "/host";
  }
</script>

<!-- <a href="/home">g</a> -->
<!-- <div>
	<div style="text-align: center;">

		<img src={logo} alt="Card Hub Logo" style="display:inline" width="200"/>
		
	</div>
</div> -->
<main>	
	<div class="flex flex-col items-center gap-5"> 
		<h1>Welcome to Card Hub!</h1>
		<div class="flex flex-col items-center gap-5">
			<button on:click={moveHost}
			class="w-75 py-2 px-4 border-transparent rounded-md shadown-sm test-sm font-medium text-black bg-red-400 hover:bg-red-500 hover:text-white py-2 px-5 border-2 border-black rounded-lg justify-center"
			>Host a Game</button>

			<button on:click={moveJoin}
			class="w-75 justify-center py-2 px-4 border-transparent rounded-md shadown-sm test-sm font-medium text-black bg-red-400 hover:bg-red-500 hover:text-white py-2 px-5 border-2 border-black rounded-lg"
			>Join a Game</button>
		</div>
		
	</div>

</main>


<style>
  
	h1 {
	  color: #ffffff;
	  font-size: 4em;
	  font-weight: 100;
	  text-align: center;
	}

	main {
		/* display: flex; */
		justify-content: center;
		align-items: center;
	}
  
  
  </style>