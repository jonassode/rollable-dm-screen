import { RollableTable } from "./RollableTable.js";
import { KeywordTable } from "./KeywordTable.js";
import { DiceTable } from "./DiceTable.js";
import { ClearButton } from "./ClearButton.js";

// ── Oracle D6 ────────────────────────────────────────────────────────────────
const tablesEl = document.getElementById("tables");
if (tablesEl) {
  // Store references to all tables that can be cleared
  const clearableComponents = [];

  // ── Column 1: Oracle + Keyword + Dice ──────────────────────────────────────
  const oracleColEl = document.createElement("div");
  oracleColEl.className = "tables-column";
  tablesEl.append(oracleColEl);

  clearableComponents.push(
    RollableTable({
      title: "Oracle - D6",
      items: ["Yes, and", "Yes", "Yes, but", "No, but", "No", "No, and"],
      container: oracleColEl,
    })
  );

  // ── Keyword Generator ───────────────────────────────────────────────────────
  clearableComponents.push(
    KeywordTable({
      title: "Key word",
      container: oracleColEl,
    })
  );

  // ── Dice Tables ─────────────────────────────────────────────────────────────
  const diceTypes = [
    { title: "D4", max: 4 },
    { title: "D6", max: 6 },
    { title: "D8", max: 8 },
    { title: "D10", max: 10 },
    { title: "D12", max: 12 },
    { title: "D20", max: 20 },
  ];

  diceTypes.forEach(({ title, max }) => {
    clearableComponents.push(
      DiceTable({
        title,
        max,
        container: oracleColEl,
      })
    );
  });

  // ── Clear Button ────────────────────────────────────────────────────────────
  ClearButton({
    title: "Clear",
    onClick: () => {
      clearableComponents.forEach((component) => {
        if (component.clear) {
          component.clear();
        }
      });
    },
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

  // ── Column 3: Village tables ────────────────────────────────────────────────
  const villageColEl = document.createElement("div");
  villageColEl.className = "tables-column";
  tablesEl.append(villageColEl);

  // ── Village - Location ────────────────────────────────────────────────────────
  RollableTable({
    title: "Village - Location",
    items: ["Tavern", "Town Square / Fountain", "Temple / Church", "Town hall", "Shops - See table", "Advance Location"],
    container: villageColEl,
  });

  // ── Village - Advanced Location ───────────────────────────────────────────────
  RollableTable({
    title: "Village - Advanced Location",
    items: ["Keep / Guardhouse", "Sewers / Sewer gate", "Gate", "Bridge", "Riverfront / Docks", "Warehouse", "Lords Alliance/Faction Office", "Monument", "Bridge", "Library"],
    container: villageColEl,
  });

  // ── Village - Who ─────────────────────────────────────────────────────────────
  RollableTable({
    title: "Village - Who",
    items: ["Guards", "Commoner", "Bandits / Cultist / Hobgoblin", "Animals", "Lord", "Priests", "NPC", "Monster"],
    container: villageColEl,
  });

  // ── Village - What's Happening ────────────────────────────────────────────────
  RollableTable({
    title: "Village - What's Happening",
    items: ["Fight / Argument", "A disappearence", "Guarding", "Chase", "Talking silently", "Acting Shady", "A show/spectacle", "Selling/Buying"],
    container: villageColEl,
  });

  // ── Village - Shops ───────────────────────────────────────────────────────────
  RollableTable({
    title: "Village - Shops",
    items: ["Potions", "Herbs", "Weapons / Armour", "Magic Services", "Items", "Trinkets"],
    container: villageColEl,
  });
}
