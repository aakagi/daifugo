import { shuffleWithSeed } from "./deck.ts";
import { sortCards } from "./sort-cards.ts";

export function dealCards<T extends string>(
  deck: readonly T[],
  numPlayers: number,
  seed: string,
): T[][] {
  const shuffled = shuffleWithSeed(deck, seed);
  const hands: T[][] = Array.from({ length: numPlayers }, () => []);
  for (let i = 0; i < shuffled.length; i++) {
    hands[i % numPlayers].push(shuffled[i]);
  }
  const sortedHands = hands.map(sortCards);
  return sortedHands;
}
