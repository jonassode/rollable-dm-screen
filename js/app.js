import { RollableTable } from "./RollableTable.js";

// ── Oracle D6 ────────────────────────────────────────────────────────────────
const tablesEl = document.getElementById("tables");
if (tablesEl) {
  RollableTable({
    title: "Oracle - D6",
    items: ["Yes, and", "Yes", "Yes, but", "No, but", "No", "No, and"],
    container: tablesEl,
  });
}
