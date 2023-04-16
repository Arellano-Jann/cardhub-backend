import { c as create_ssr_component, d as each, e as escape, v as validate_component } from './index-227e1bff.js';
import { C as Card } from './Card-7db33086.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isListview = false } = $$props;
  let { dummyCards = [
    {
      name: "asdgasha",
      description: "asdgsdga asdgasdgasg asdgasgd asdga",
      quantity: 5
    },
    {
      name: "asdgasha",
      description: "asdgsdga asdgasdgasg asdgasgd asdga",
      quantity: 2
    }
  ] } = $$props;
  if ($$props.isListview === void 0 && $$bindings.isListview && isListview !== void 0)
    $$bindings.isListview(isListview);
  if ($$props.dummyCards === void 0 && $$bindings.dummyCards && dummyCards !== void 0)
    $$bindings.dummyCards(dummyCards);
  return `<div class="p-2 m-2"><div class="flex justify-between p-2"><h1>Card Library</h1>
        <div class=""><button>
                Toggle View
            </button></div></div>
    ${isListview ? `<div class="flex flex-col">${each(dummyCards, (card) => {
    return `
                <a href="google.com"><div class="border-[var(--white)] border-2 p-2 m-2 flex flex-row justify-between align-middle"><div class=""><p class="">${escape(card.name)}</p></div>
                        <div class="hover:bg-black hover:text-white p-2"><button>X</button>
                        </div></div>
                </a>`;
  })}</div>` : `<div class="flex">${each(dummyCards, (card) => {
    return `<div class="relative"><div class="absolute right-4 top-1 bg-red-500 text-white rounded-full p-2 text-sm"><p>${escape(card.quantity)}</p></div>
                    ${validate_component(Card, "Card").$$render($$result, {}, {}, {})}
                </div>`;
  })}</div>`}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ffa7ca08.js.map
