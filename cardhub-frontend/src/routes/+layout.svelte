<script>
  import "../app.css";
  import Navbar from "../lib/components/Navbar.svelte";
</script>

<Navbar />
<slot />

<div class="center-page-layout">
  <!-- <slot /> -->
</div>

<style>
  .center-page-layout {
      justify-content: center;
      max-width: 700px;
      /* max-height: 0cqmax; */
      margin: auto;
      /* background-color: #1e1e1e; */
      align-items: center;
      
  }
</style>