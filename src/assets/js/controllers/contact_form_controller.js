import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["phone", "email", "error"];

  validate(event) {
    const phone = this.phoneTarget.value.trim();
    const email = this.emailTarget.value.trim();

    if (phone === "" && email === "") {
      event.preventDefault();
      this.errorTarget.classList.remove("hidden");
      this.phoneTarget.focus();
      return;
    }

    this.errorTarget.classList.add("hidden");
  }
}
