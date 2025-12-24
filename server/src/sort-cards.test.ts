import { sortCards } from "./sort-cards.ts";
import { assertEquals } from "jsr:@std/assert@1/equals";

Deno.test("sortCards sorts cards by rank then suit", () => {
  const hand = ["KH", "3H", "10S", "2H", "AC", "2C", "3C", "JD"];
  const sorted = sortCards([...hand]);
  assertEquals(sorted, ["3H", "3C", "10S", "JD", "KH", "AC", "2H", "2C"]);
});

Deno.test("sortCards preserves jokers (XX) at the end", () => {
  const hand = ["KH", "XX", "2D", "AS", "XX", "3C"];
  const sorted = sortCards([...hand]);
  assertEquals(sorted, ["3C", "KH", "AS", "2D", "XX", "XX"]);
});

Deno.test("sortCards handles all suits and sorts correctly", () => {
  const hand = ["3D", "3C", "3H", "3S"];
  const sorted = sortCards([...hand]);
  assertEquals(sorted, ["3H", "3C", "3D", "3S"]);
});

Deno.test("sortCards does not mutate original array", () => {
  const hand = ["QS", "2D", "KH"];
  const copy = [...hand];
  sortCards(hand);
  assertEquals(hand, copy);
});

Deno.test("sortCards sorts a full mixed hand correctly", () => {
  const hand = [
    "10S",
    "2C",
    "KH",
    "JD",
    "3D",
    "AS",
    "QH",
    "QC",
    "XX",
    "2H",
    "AC",
    "JC",
    "8D",
    "7H",
  ];
  const sorted = sortCards([...hand]);
  // In order by rank, then suit. Jokers at the end.
  assertEquals(
    sorted,
    [
      "2H",
      "2C",
      "3D",
      "7H",
      "8D",
      "10S",
      "JC",
      "JD",
      "QH",
      "QC",
      "KH",
      "AC",
      "AS",
      "XX",
    ],
  );
});
