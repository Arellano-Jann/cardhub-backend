import { c as create_ssr_component, v as validate_component, f as add_attribute } from './index-227e1bff.js';
import { register } from 'swiper/element/bundle';
import { EffectCards, Pagination } from 'swiper';
import { C as Card } from './Card-7db33086.js';

const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  register();
  let swiperEl;
  return `<swiper-container${add_attribute("slides-per-view", 2, 0)}${add_attribute("space-between", 9, 0)}${add_attribute("centered-slides", true, 0)}${add_attribute("pagination", { hideOnClick: true }, 0)} image.png${add_attribute("modules", [EffectCards, Pagination], 0)}${add_attribute("this", swiperEl, 0)}><div><swiper-slide>${validate_component(Card, "Card").$$render($$result, {}, {}, {})}</swiper-slide>
      <swiper-slide>${validate_component(Card, "Card").$$render($$result, {}, {}, {})}</swiper-slide>
      <swiper-slide>${validate_component(Card, "Card").$$render($$result, {}, {}, {})}</swiper-slide></div></swiper-container>

<button>Next</button>
<button>Prev</button>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Carousel, "Carousel").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a0852fb6.js.map
