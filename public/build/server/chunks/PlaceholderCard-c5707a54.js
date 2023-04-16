import { c as create_ssr_component, v as validate_component, e as escape, f as add_attribute } from './index-227e1bff.js';

const css$2 = {
  code: '.PlaceholderCAH.svelte-csv6to{display:grid;border-radius:6px;padding:3px;color:white;font-weight:500;font-family:"Arial"}.main-text.svelte-csv6to{font-size:13px}.card-footer.svelte-csv6to{font-size:8px}',
  map: null
};
const PlaceholderCAH = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { card_obj } = $$props;
  if ($$props.card_obj === void 0 && $$bindings.card_obj && card_obj !== void 0)
    $$bindings.card_obj(card_obj);
  $$result.css.add(css$2);
  return `
<div class="PlaceholderCAH border-2 border-black border-black bg-neutral-800 svelte-csv6to" style="${"width: " + escape(card_obj["card"]["dimensions"][0], true) + "px; height: " + escape(card_obj["card"]["dimensions"][1], true) + "px"}"><div class="main-text svelte-csv6to"><p>${escape(card_obj["card"]["properties"]["text"])}</p></div>
	<div class="card-footer svelte-csv6to"><img src="src/lib/assets/cards_against_humanity/footers/question.svg" style="height:40px; width:80px; float:left" alt="logo"></div>
</div>`;
});
const css$1 = {
  code: ".PlaceholderPlayingCards.svelte-12ocui6{display:grid;grid-template-columns:1fr 3fr 1fr;border-radius:6px;padding:3px}.centerdiv.svelte-12ocui6{display:flex;justify-content:center;align-items:center;height:100%}.corner-val.svelte-12ocui6{display:inline-block;font-size:40px;margin:-15px 0px -15px 0px;font-weight:bold}.right-col.svelte-12ocui6{position:relative}.upside-down.svelte-12ocui6{position:absolute;bottom:0;transform:rotate(180deg)}.col.svelte-12ocui6{color:black}",
  map: null
};
const PlaceholderPlayingCards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { card_obj } = $$props;
  if ($$props.card_obj === void 0 && $$bindings.card_obj && card_obj !== void 0)
    $$bindings.card_obj(card_obj);
  $$result.css.add(css$1);
  return `<div class="PlaceholderPlayingCards border-2 border-black border-black bg-blue-50 svelte-12ocui6" style="${"width: " + escape(card_obj["card"]["dimensions"][0], true) + "px; height: " + escape(card_obj["card"]["dimensions"][1], true) + "px"}"><div class="col svelte-12ocui6">
		<div class="right-side-up"><p class="corner-val col svelte-12ocui6">${escape(card_obj["card"]["properties"]["text"])}</p>
			<img${add_attribute("src", card_obj["card"]["properties"]["small_image"], 0)} alt="small"></div></div>
	<div class="centerdiv bg-red-100 svelte-12ocui6">
		<img${add_attribute("src", card_obj["card"]["properties"]["image"], 0)} alt="center"></div>
	<div class="right-col col svelte-12ocui6">
		<div class="upside-down svelte-12ocui6"><p class="corner-val col svelte-12ocui6">${escape(card_obj["card"]["properties"]["text"])}</p>
			<img${add_attribute("src", card_obj["card"]["properties"]["small_image"], 0)} alt="small"></div></div>
</div>`;
});
const css = {
  code: '.PlaceholderFull.svelte-1d9qeaw{display:grid;border-radius:6px;padding:3px;color:black;font-weight:500;font-family:"Arial"}',
  map: null
};
const PlaceholderFull = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { card_obj } = $$props;
  if ($$props.card_obj === void 0 && $$bindings.card_obj && card_obj !== void 0)
    $$bindings.card_obj(card_obj);
  $$result.css.add(css);
  return `<div class="PlaceholderFull border-2 border-black svelte-1d9qeaw" style="${"width: " + escape(card_obj["card"]["dimensions"][0], true) + "px; height: " + escape(card_obj["card"]["dimensions"][1], true) + "px; background-image: url(" + escape(card_obj["card"]["properties"]["image"], true) + "); background-size: " + escape(card_obj["card"]["dimensions"][0], true) + "px " + escape(card_obj["card"]["dimensions"][1], true) + "px; background-position: top -2px right -2px; overflow: hidden;"}"></div>`;
});
const small_image = "src/lib/assets/Card_spade.svg";
const image = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2FiYjMyM2JkZjQ4NmUyYjI2NzMyYTIwYmY0YTdkZTAzZjc3MDIwYiZjdD1n/Ju7l5y9osyymQ/giphy.gif";
const dimensions = [
  125,
  175
];
const generic_card_obj = {
  "corner-val": 5,
  small_image,
  image,
  dimensions
};
const PlaceholderCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { card_obj = generic_card_obj } = $$props;
  if ($$props.card_obj === void 0 && $$bindings.card_obj && card_obj !== void 0)
    $$bindings.card_obj(card_obj);
  return `


<div class="PlaceholderCard">${card_obj["card"]["template"] == "playing_cards" ? `${validate_component(PlaceholderPlayingCards, "PlaceholderPlayingCards").$$render($$result, { card_obj }, {}, {})}` : `${card_obj["card"]["template"] == "cards_against_humanity" ? `${validate_component(PlaceholderCAH, "PlaceholderCah").$$render($$result, { card_obj }, {}, {})}` : `${card_obj["card"]["template"] == "full-image" ? `${validate_component(PlaceholderFull, "PlaceholderFull").$$render($$result, { card_obj }, {}, {})}` : `<p>in else</p>`}`}`}</div>`;
});

export { PlaceholderCard as P };
//# sourceMappingURL=PlaceholderCard-c5707a54.js.map
