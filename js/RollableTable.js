/**
 * Generic RollableTable component.
 *
 * Creates a table whose title, when clicked, rolls a die equal to the number
 * of rows and highlights the matching result.
 *
 * @param {Object}   config
 * @param {string}   config.title     - Table heading text (e.g. "Oracle - D6")
 * @param {string[]} config.items     - Row labels in die-roll order (index 0 → roll 1)
 * @param {Element}  config.container - DOM element to render the table into
 * @returns {{ roll: Function, highlight: Function }}
 */
export function RollableTable({ title, items, container }) {
  // ── Build DOM ──────────────────────────────────────────────────────────────
  const wrapper = document.createElement("div");
  wrapper.className = "rollable-table";

  const heading = document.createElement("h2");
  heading.className = "rollable-table__title";
  heading.textContent = title;
  heading.setAttribute("role", "button");
  heading.setAttribute("tabindex", "0");
  heading.setAttribute("aria-label", `Roll ${title}`);

  const table = document.createElement("table");
  table.className = "rollable-table__table";

  const tbody = document.createElement("tbody");

  items.forEach((label, i) => {
    const tr = document.createElement("tr");
    tr.className = "rollable-table__row";
    tr.dataset.index = String(i);

    const tdDie = document.createElement("td");
    tdDie.className = "rollable-table__die";
    tdDie.textContent = String(i + 1);

    const tdLabel = document.createElement("td");
    tdLabel.className = "rollable-table__label";
    tdLabel.textContent = label;

    tr.append(tdDie, tdLabel);
    tbody.append(tr);
  });

  table.append(tbody);
  wrapper.append(heading, table);
  container.append(wrapper);

  // ── Helpers ────────────────────────────────────────────────────────────────
  function rollDie() {
    // Returns a 0-based index
    return Math.floor(Math.random() * items.length);
  }

  function highlight(index) {
    const rows = tbody.querySelectorAll(".rollable-table__row");
    rows.forEach((row) => row.classList.remove("rollable-table__row--active"));
    if (index !== null && index >= 0 && index < rows.length) {
      rows[index].classList.add("rollable-table__row--active");
    }
  }

  function roll() {
    highlight(rollDie());
  }

  // ── Events ─────────────────────────────────────────────────────────────────
  heading.addEventListener("click", roll);
  heading.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      roll();
    }
  });

  // ── Public API ─────────────────────────────────────────────────────────────
  return { roll, highlight };
}
