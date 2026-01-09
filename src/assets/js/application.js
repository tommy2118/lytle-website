import { Application } from "@hotwired/stimulus";

// Initialize Stimulus
const application = Application.start();

// Configure Stimulus development experience
application.debug = false;
window.Stimulus = application;

// Import and register controllers
import MobileNavController from "./controllers/mobile_nav_controller.js";
application.register("mobile-nav", MobileNavController);
