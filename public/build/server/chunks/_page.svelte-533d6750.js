import { c as create_ssr_component, v as validate_component, d as each, e as escape } from './index-227e1bff.js';
import { P as PlaceholderCard } from './PlaceholderCard-c5707a54.js';
import { C as Card } from './Card-7db33086.js';

/* empty css                                                    */const deck_type$1 = "playing_cards";
const back_card$1 = {
  card: {
    template: "full-image",
    card_type: null,
    properties: {
      image: "src/lib/assets/playing_cards/playing_card_back.png"
    },
    dimensions: [
      125,
      175
    ]
  }
};
const cards$1 = [
  {
    card: {
      template: "playing_cards",
      card_type: "number",
      properties: {
        text: "A",
        color: "black",
        small_image: "src/lib/assets/playing_cards/suits/spade.svg",
        image: null
      },
      dimensions: [
        125,
        175
      ]
    }
  },
  {
    card: {
      template: "playing_cards",
      card_type: "number",
      properties: {
        text: "7",
        color: "red",
        small_image: "src/lib/assets/Card_spade.svg",
        image: null
      },
      dimensions: [
        125,
        175
      ]
    }
  },
  {
    card: {
      template: "playing_cards",
      card_type: "face",
      properties: {
        text: "Q",
        color: "red",
        small_image: "hearts.svg",
        image: "red_queen_hearts.svg"
      }
    }
  }
];
const playing_card_deck = {
  deck_type: deck_type$1,
  back_card: back_card$1,
  cards: cards$1
};
const deck_type = "cards_against_humanity";
const back_card = {
  card: {
    template: "full-image",
    properties: {
      image: "src/lib/assets/cards_against_humanity/backs/answer.svg"
    },
    dimensions: [
      127,
      176
    ]
  }
};
const cards = [
  {
    card: {
      template: "cards_against_humanity",
      card_type: "question",
      properties: {
        text: "TSA guidelines now prohibit _________ on airplanes."
      },
      dimensions: [
        127,
        176
      ]
    }
  },
  {
    card: {
      template: "cards_against_humanity",
      card_type: "question",
      properties: {
        text: "What's my secret power?"
      },
      dimensions: [
        127,
        176
      ]
    }
  },
  {
    card: {
      template: "cards_against_humanity",
      card_type: "answer",
      properties: {
        text: "COVID-19."
      },
      dimensions: [
        127,
        176
      ]
    }
  },
  {
    card: {
      template: "cards_against_humanity",
      card_type: "answer",
      properties: {
        text: "Doing crimes."
      },
      dimensions: [
        127,
        176
      ]
    }
  }
];
const cards_against_humanity_deck = {
  deck_type,
  back_card,
  cards
};
const css$1 = {
  code: ".deckview.svelte-13drxo7{background-color:blue}.deck-grid.svelte-13drxo7{padding:10px;display:block;display:grid;grid-gap:10px;grid-template-columns:repeat(auto-fill, 140px)}",
  map: null
};
const DeckView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let playing_card_back = playing_card_deck["back_card"];
  let cards_against_humanity_back = cards_against_humanity_deck["back_card"];
  $$result.css.add(css$1);
  return `<div class="deckview svelte-13drxo7" style="width:100p"><div class="deck-grid svelte-13drxo7"><div class="placeholder-wrapper">${validate_component(PlaceholderCard, "PlaceholderCard").$$render($$result, { card_obj: playing_card_back }, {}, {})}</div>	
		<div class="placeholder-wrapper">${validate_component(PlaceholderCard, "PlaceholderCard").$$render($$result, { card_obj: cards_against_humanity_back }, {}, {})}</div></div>
</div>`;
});
const CardLibrary = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<div class="p-2 m-2"><div class=""><button>
            Toggle View
        </button></div>
    ${isListview ? `<div class="flex flex-col">${each(dummyCards, (card) => {
    return `
                <a href="google.com"><div class="border-black border-2 p-2 m-2 flex flex-row justify-between align-middle"><div class=""><p class="">${escape(card.name)}</p></div>
                        <div class="hover:bg-black hover:text-white p-2"><button>X</button>
                        </div></div>
                </a>`;
  })}</div>` : `<div class="flex">${each(dummyCards, (card) => {
    return `<div class="relative"><div class="absolute right-4 top-1 bg-red-500 text-white rounded-full p-2 text-sm"><p>${escape(card.quantity)}</p></div>
                    ${validate_component(Card, "Card").$$render($$result, {}, {}, {})}
                </div>`;
  })}</div>`}</div>`;
});
const css = {
  code: "h1.svelte-1002rcv{font-size:3em;font-weight:bold}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected_cards;
  $$result.css.add(css);
  selected_cards = 5 + 10;
  return `
<h1 class="svelte-1002rcv">Host game </h1>
<h2>Select Game to Play </h2>
${validate_component(DeckView, "DeckView").$$render($$result, {}, {}, {})}
<h2>View Cards in Deck </h2>
${validate_component(CardLibrary, "CardLibrary").$$render($$result, { selected_cards }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-533d6750.js.map
