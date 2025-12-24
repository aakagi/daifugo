import { dealCards } from "./deal-cards.ts";
import { deck } from "./deck.ts";
import { assertEquals } from "jsr:@std/assert@1/equals";

Deno.test("dealCards deals all cards, splits among 4 players (default)", () => {
  // 54 cards in standard deck (with Jokers)
  const numPlayers = 4;
  const seed = "abc123";
  const hands = dealCards(deck, numPlayers, seed);
  console.log("hands", hands);
  // Expected: 54/4 = 13, rest distributed (2 players get 14, 2 players get 13)
  const handSizes = hands.map((h) => h.length).sort();
  assertEquals(hands.length, 4);
  assertEquals(handSizes, [13, 13, 14, 14]);
  // No cards should be missing or repeated
  const allDealt = hands.flat().sort();
  assertEquals(allDealt, [...deck].sort());
});
