import { RollableTable } from "./RollableTable.js";
import { KeywordTable } from "./KeywordTable.js";

// ── Oracle D6 ────────────────────────────────────────────────────────────────
const tablesEl = document.getElementById("tables");
if (tablesEl) {
  // ── Column 1: Oracle + Keyword ──────────────────────────────────────────────
  const oracleColEl = document.createElement("div");
  oracleColEl.className = "tables-column";
  tablesEl.append(oracleColEl);

  RollableTable({
    title: "Oracle - D6",
    items: ["Yes, and", "Yes", "Yes, but", "No, but", "No", "No, and"],
    container: oracleColEl,
  });

  // ── Keyword Generator ───────────────────────────────────────────────────────
  KeywordTable({
    title: "Key word",
    container: oracleColEl,
  });

  // ── Column 2: NPC tables ────────────────────────────────────────────────────
  const npcColEl = document.createElement("div");
  npcColEl.className = "tables-column";
  tablesEl.append(npcColEl);

  // ── NPC - Race ───────────────────────────────────────────────────────────────
  RollableTable({
    title: "NPC - Race",
    items: ["Human", "Elf", "Dwarf", "Goblin", "Orc", "Halfling", "Dragonborn", "Gnome"],
    container: npcColEl,
  });

  // ── NPC - Class ──────────────────────────────────────────────────────────────
  RollableTable({
    title: "NPC - Class",
    items: ["Artificer", "Warrior", "Sorcerer", "Bard", "Cleric", "Wizard"],
    container: npcColEl,
  });

  // ── NPC - Attitude ───────────────────────────────────────────────────────────
  RollableTable({
    title: "NPC - Attitude",
    items: ["Friendly", "Curious", "Indifferent", "Suspicious", "Hostile", "Violent"],
    container: npcColEl,
  });
}
