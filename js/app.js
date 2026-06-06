import { RollableTable } from "./RollableTable.js";

// ── Oracle D6 ────────────────────────────────────────────────────────────────
RollableTable({
  title: "Oracle - D6",
  items: ["Yes, and", "Yes", "Yes, but", "No, but", "No", "No, and"],
  container: document.getElementById("tables"),
});
