<script>
  import Navbar from "../../lib/components/Navbar.svelte";
  import logo from "../../lib/assets/card_hub_logo.svg";
  // import "@fontsource/open-sans";
</script>

<Navbar />
<main>
  <img src={logo} alt="Card Hub Logo" width="200" />

  <h1>Card Hub</h1>
  <!-- <p>Home page content</p> -->

  <div class="home-content grid grid-cols-3 grid-rows-3">
    <div class="col-start-2 row-start-2 border-2 border-white p-5 max-w-sm">
      <form method="POST">
        <div class="py-5 flex justify-between">
          <button
            class="hover:bg-black hover:text-white py-2 px-5 border-2 border-white text-white align-center"
            >Host Game</button
          >
          <p>or</p>
        </div>
        <div class="flex justify-between py-2">
          <label for="room-num"> Join Room </label>
          <input
            class="border-2 border-white text-black"
            name="room-num"
            type="text"
          />
        </div>
        <div class="flex justify-between py-2">
          <label for="display-name text-black"> Display Name </label>
          <input
            class="border-2 border-white text-black"
            name="display-name"
            type="text"
          />
        </div>
        <div class="flex flex-row-reverse">
          <button
            class="hover:bg-black hover:text-white py-2 px-5 border-2 border-white text-white"
            >Join</button
          >
        </div>
      </form>
    </div>
  </div>
</main>
<!--<Navbar />-->

<!-- <nav>
  <a href = "/">Home</a>
  <a href = "/about">About</a>
</nav> -->

<!-- <style>
</style> -->

<style>
  main {
    text-align: center;
    background-color: rgb(45, 44, 59); /* padding: 1em; */
    /* max-width: 240px; */
    /* margin: 0 auto; */
  }

  h1 {
    color: #ffffff;
    text-transform: uppercase;
    font: times new roman;
    font-size: 4em;
    font-weight: 100;
  }

  p {
    color: #ffffff;
    font-size: 1.5em;
    font-weight: 100;
  }
</style>
