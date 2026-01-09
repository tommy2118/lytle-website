import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["menu", "iconOpen", "iconClose", "button"];

  connect() {
    this.isOpen = false;
  }

  toggle() {
    this.isOpen = !this.isOpen;

    if (this.hasMenuTarget) {
      this.menuTarget.classList.toggle("hidden", !this.isOpen);
    }

    if (this.hasIconOpenTarget) {
      this.iconOpenTarget.classList.toggle("hidden", this.isOpen);
    }

    if (this.hasIconCloseTarget) {
      this.iconCloseTarget.classList.toggle("hidden", !this.isOpen);
    }

    if (this.hasButtonTarget) {
      this.buttonTarget.setAttribute("aria-expanded", this.isOpen);
    }
  }

  // Close menu when clicking outside
  close(event) {
    if (this.isOpen && !this.element.contains(event.target)) {
      this.isOpen = false;

      if (this.hasMenuTarget) {
        this.menuTarget.classList.add("hidden");
      }

      if (this.hasIconOpenTarget) {
        this.iconOpenTarget.classList.remove("hidden");
      }

      if (this.hasIconCloseTarget) {
        this.iconCloseTarget.classList.add("hidden");
      }

      if (this.hasButtonTarget) {
        this.buttonTarget.setAttribute("aria-expanded", "false");
      }
    }
  }
}
