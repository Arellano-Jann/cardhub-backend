import { c as create_ssr_component, d as each, e as escape, v as validate_component } from "../../../chunks/index.js";
const CardLibrary = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dummyCards = [{ name: "asdgsdg" }, { name: "fhgjrjs" }] } = $$props;
  if ($$props.dummyCards === void 0 && $$bindings.dummyCards && dummyCards !== void 0)
    $$bindings.dummyCards(dummyCards);
  return `<div class="${"p-2 m-2"}"><h1>Card Library</h1>
    <div class="${"flex flex-col"}">${each(dummyCards, (card) => {
    return `
            <a href="${"#"}"><div class="${"border-black border-2 p-2 m-2 flex flex-row justify-between align-middle"}"><div class="${""}"><p class="${"my-a"}">${escape(card.name)}</p></div>
                    <div class="${"hover:bg-black hover:text-white p-2"}"><button>X</button>
                    </div></div>
            </a>`;
  })}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(CardLibrary, "CardLibrary").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
