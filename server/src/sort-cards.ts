export function sortCards<T extends string>(cards: T[]): T[] {
  return cards.sort((a, b) => {
    // deno-fmt-ignore
    const rankOrder = ["3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2", "X"];
    const suitOrder = ["H", "C", "D", "S", "X"];
    const rankA = rankOrder.indexOf(a.slice(0, -1));
    const rankB = rankOrder.indexOf(b.slice(0, -1));
    const suitA = suitOrder.indexOf(a.slice(-1));
    const suitB = suitOrder.indexOf(b.slice(-1));
    return rankA - rankB || suitA - suitB;
  });
}
