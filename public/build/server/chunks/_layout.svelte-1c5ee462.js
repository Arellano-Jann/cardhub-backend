import { c as create_ssr_component, v as validate_component } from './index-227e1bff.js';
import { N as Navbar } from './Navbar-99c1a466.js';

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-1c5ee462.js.map
