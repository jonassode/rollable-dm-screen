import { KEYWORDS } from "./keywords.js";

/**
 * KeywordTable component.
 *
 * Creates a single-row table whose title, when clicked, displays a random
 * keyword drawn from the KEYWORDS list.
 *
 * @param {Object}  config
 * @param {string}  config.title     - Table heading text (e.g. "Key word")
 * @param {Element} config.container - DOM element to render the table into
 * @returns {{ roll: Function }}
 */
export function KeywordTable({ title, container }) {
  // ── Validate inputs ────────────────────────────────────────────────────────
  if (typeof title !== "string" || title.trim() === "") {
    throw new TypeError("KeywordTable: `title` must be a non-empty string.");
  }
  if (!(container instanceof Element)) {
    throw new TypeError("KeywordTable: `container` must be a valid DOM Element.");
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
    const word = KEYWORDS[Math.floor(Math.random() * KEYWORDS.length)];
    tdLabel.textContent = word;
    tr.classList.add("rollable-table__row--active");
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
  return { roll };
}
