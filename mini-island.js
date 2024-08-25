// <mini-island>
class MiniIsland extends HTMLElement {
  static tagName = "mini-island"; // we need to do mini-island, we cant do miniIsland

  static attributes = {
    dataIsland: "data-island",
  };
}

if ("customElement" in window) {
  window.customElement.define(MiniIsland.tagName, MiniIsland);
} else {
  console.error(
    "Island cannot be initiated because Window.customElement is unavailable",
  );
}
