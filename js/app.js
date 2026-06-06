import { RollableTable } from "./RollableTable.js";
import { KeywordTable } from "./KeywordTable.js";

// ── Oracle D6 ────────────────────────────────────────────────────────────────
const tablesEl = document.getElementById("tables");
if (tablesEl) {
  RollableTable({
    title: "Oracle - D6",
    items: ["Yes, and", "Yes", "Yes, but", "No, but", "No", "No, and"],
    container: tablesEl,
  });

  // ── Keyword Generator ───────────────────────────────────────────────────────
  KeywordTable({
    title: "Key word",
    container: tablesEl,
  });

  // ── NPC - Race ───────────────────────────────────────────────────────────────
  RollableTable({
    title: "NPC - Race",
    items: ["Human", "Elf", "Dwarf", "Goblin", "Orc", "Halfling", "Dragonborn", "Gnome"],
    container: tablesEl,
  });

  // ── NPC - Class ──────────────────────────────────────────────────────────────
  RollableTable({
    title: "NPC - Class",
    items: ["Artificer", "Warrior", "Sorcerer", "Bard", "Cleric", "Wizard"],
    container: tablesEl,
  });

  // ── NPC - Attitude ───────────────────────────────────────────────────────────
  RollableTable({
    title: "NPC - Attitude",
    items: ["Friendly", "Curious", "Indifferent", "Suspicious", "Hostile", "Violent"],
    container: tablesEl,
  });
}
