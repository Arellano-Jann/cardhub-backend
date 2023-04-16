import { c as create_ssr_component, v as validate_component, f as add_attribute } from './index-227e1bff.js';
import { N as Navbar } from './Navbar-99c1a466.js';

const logo = "/_app/immutable/assets/card_hub_logo.a95766e7.svg";
const css = {
  code: "main.svelte-1270mgj{text-align:center;background-color:rgb(45, 44, 59)}h1.svelte-1270mgj{color:#ffffff;text-transform:uppercase;font:times new roman;font-size:4em;font-weight:100}p.svelte-1270mgj{color:#ffffff;font-size:1.5em;font-weight:100}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
<main class="svelte-1270mgj"><img${add_attribute("src", logo, 0)} alt="Card Hub Logo" width="200">

  <h1 class="svelte-1270mgj">Card Hub</h1>
  

  <div class="home-content grid grid-cols-3 grid-rows-3"><div class="col-start-2 row-start-2 border-2 border-white p-5 max-w-sm"><form method="POST"><div class="py-5 flex justify-between"><button class="hover:bg-black hover:text-white py-2 px-5 border-2 border-white text-white align-center">Host Game</button>
          <p class="svelte-1270mgj">or</p></div>
        <div class="flex justify-between py-2"><label for="room-num">Join Room </label>
          <input class="border-2 border-white text-black" name="room-num" type="text"></div>
        <div class="flex justify-between py-2"><label for="display-name text-black">Display Name </label>
          <input class="border-2 border-white text-black" name="display-name" type="text"></div>
        <div class="flex flex-row-reverse"><button class="hover:bg-black hover:text-white py-2 px-5 border-2 border-white text-white">Join</button></div></form></div></div></main>




`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ca44236e.js.map
