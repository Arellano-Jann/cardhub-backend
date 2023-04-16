import { c as create_ssr_component, v as validate_component, d as each, e as escape } from './index-227e1bff.js';
import { P as PlaceholderCard } from './PlaceholderCard-c5707a54.js';

const decks = [
  {
    deck_type: "cards_against_humanity",
    cards: [
      {
        card: {
          template: "cards_against_humanity",
          type: "question",
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
          type: "answer",
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
          type: "answer",
          properties: {
            text: "Doing crimes."
          }
        }
      }
    ]
  },
  {
    deck_type: "playing_cards",
    cards: [
      {
        card: {
          template: "playing_cards",
          type: "number",
          properties: {
            text: "7",
            color: "red",
            small_image: "src/lib/assets/Card_spade.svg",
            image: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2FiYjMyM2JkZjQ4NmUyYjI2NzMyYTIwYmY0YTdkZTAzZjc3MDIwYiZjdD1n/Ju7l5y9osyymQ/giphy.gif"
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
          type: "face",
          properties: {
            text: "Q",
            color: "red",
            small_image: "hearts.svg",
            image: "red_queen_hearts.svg"
          }
        }
      }
    ]
  },
  {
    deck_type: "uno",
    cards: [
      {
        card: {
          type: "number",
          properties: {
            text: "7",
            color: "red"
          }
        }
      },
      {
        card: {
          type: "hybrid",
          properties: {
            text: "+4",
            color: "green",
            image: "plus_four.svg"
          }
        }
      },
      {
        card: {
          type: "special",
          properties: {
            color: "blue",
            image: "reverse.svg"
          }
        }
      }
    ]
  }
];
const deck_obj = {
  decks
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let decks2 = deck_obj["decks"];
  let cah_cards = decks2[0]["cards"];
  let playing_cards = decks2[1]["cards"];
  return `<div>${validate_component(PlaceholderCard, "PlaceholderCard").$$render($$result, { card_obj: cah_cards[0] }, {}, {})}
${validate_component(PlaceholderCard, "PlaceholderCard").$$render($$result, { card_obj: playing_cards[0] }, {}, {})}</div>

<h1>Card Library </h1>

${each({ length: 3 }, (_, i) => {
    return `<li>${escape(i + 1)}</li>`;
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-e39957f8.js.map
