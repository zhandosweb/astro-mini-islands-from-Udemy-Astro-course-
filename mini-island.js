class MiniIsland extends HTMLElement {
  static tagName = "mini-island"; // we need to do mini-island, we cant do miniIsland

  static attributes = {
    dataIsland: "data-island",
  };

  async connectedCallback() {
    await this.hydrate();
  }

  async hydrate() {
    const relevantChildTemplates = this.getTemplates();
    this.replaceTemplates(relevantChildTemplates);
  }

  replaceTemplates(templates) {
    // iterate over all nodes
    for (const node of templates) {
      console.log("The node value is", node);
      console.log("The node content is", node.content);
      node.replaceWith(node.content);
    }
  }

  getTemplates() {
    return this.querySelectorAll(
      `template[${MiniIsland.attributes.dataIsland}]`,
    );
  }
}

if ("customElements" in window) {
  window.customElements.define(MiniIsland.tagName, MiniIsland);
} else {
  console.error(
    "Island cannot be initiated because Window.customElements is unavailable",
  );
}
