import { c as create_ssr_component, d as each, e as escape } from './index-227e1bff.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dummyLobbies = [
    { name: "gasdgasdg" },
    { name: "gasdgasdg" },
    { name: "gasdgasdg" },
    { name: "gasdgasdg" },
    { name: "gasdgasdg" }
  ] } = $$props;
  if ($$props.dummyLobbies === void 0 && $$bindings.dummyLobbies && dummyLobbies !== void 0)
    $$bindings.dummyLobbies(dummyLobbies);
  return `<div>${dummyLobbies.length == 0 ? `<div class="grid grid-cols-3 grid-rows-3"><div class="row-start-2 col-start-2 text-center"><h1>No Lobbies available :(</h1></div></div>` : `<div class="max-w-lg mx-auto"><div class="p-2"><p>Lobbies</p></div>
            <div class="border-black border-2 p-5">${each(dummyLobbies, (lobby) => {
    return `<div class="flex justify-between"><h1>${escape(lobby.name)}</h1>
                        <div><button class="hover:bg-black hover:text-white p-2 ">Join</button>
                        </div></div>
                    <hr>`;
  })}</div></div>`}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-6603955b.js.map
