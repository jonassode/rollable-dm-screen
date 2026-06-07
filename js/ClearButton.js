/**
 * ClearButton component.
 *
 * Creates a button that clears all highlights and filled rows.
 *
 * @param {Object}   config
 * @param {string}   config.title     - Button text (e.g. "Clear")
 * @param {Function} config.onClick   - Callback function to execute when clicked
 * @param {Element}  config.container - DOM element to render the button into
 */
export function ClearButton({ title, onClick, container }) {
  // ── Validate inputs ────────────────────────────────────────────────────────
  if (typeof title !== "string" || title.trim() === "") {
    throw new TypeError("ClearButton: `title` must be a non-empty string.");
  }
  if (typeof onClick !== "function") {
    throw new TypeError("ClearButton: `onClick` must be a function.");
  }
  if (!(container instanceof Element)) {
    throw new TypeError("ClearButton: `container` must be a valid DOM Element.");
  }

  // ── Build DOM ──────────────────────────────────────────────────────────────
  const button = document.createElement("button");
  button.className = "clear-button";
  button.textContent = title;
  button.setAttribute("type", "button");

  container.append(button);

  // ── Events ─────────────────────────────────────────────────────────────────
  button.addEventListener("click", onClick);
}
