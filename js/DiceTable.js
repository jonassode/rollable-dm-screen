/**
 * DiceTable component.
 *
 * Creates a single-row table whose title, when clicked, displays a random
 * number between 1 and the specified maximum.
 *
 * @param {Object}  config
 * @param {string}  config.title     - Table heading text (e.g. "D4", "D6")
 * @param {number}  config.max       - Maximum die value (e.g. 4 for D4, 6 for D6)
 * @param {Element} config.container - DOM element to render the table into
 * @returns {{ roll: Function, clear: Function }}
 */
export function DiceTable({ title, max, container }) {
  // ── Validate inputs ────────────────────────────────────────────────────────
  if (typeof title !== "string" || title.trim() === "") {
    throw new TypeError("DiceTable: `title` must be a non-empty string.");
  }
  if (typeof max !== "number" || max < 1) {
    throw new TypeError("DiceTable: `max` must be a positive number.");
  }
  if (!(container instanceof Element)) {
    throw new TypeError("DiceTable: `container` must be a valid DOM Element.");
  }

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

  const tr = document.createElement("tr");
  tr.className = "rollable-table__row";

  const tdLabel = document.createElement("td");
  tdLabel.className = "rollable-table__label rollable-table__keyword-result";

  tr.append(tdLabel);
  tbody.append(tr);
  table.append(tbody);
  wrapper.append(heading, table);
  container.append(wrapper);

  // ── Helpers ────────────────────────────────────────────────────────────────
  function roll() {
    const result = Math.floor(Math.random() * max) + 1;
    tdLabel.textContent = result.toString();
    tr.classList.add("rollable-table__row--active");
  }

  function clear() {
    tdLabel.textContent = "";
    tr.classList.remove("rollable-table__row--active");
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
  return { roll, clear };
}
