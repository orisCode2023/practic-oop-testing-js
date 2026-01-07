class MenuSystem {
  constructor() {
    this.calculator = new Calculator();
    this.running = true;
  }

  displayMenu() {
    console.log("\n===== CALCULATOR MENU =====");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. View History");
    console.log("6. Clear History");
    console.log("7. Exit");
    console.log("===========================");
  }


  handleChoice(choice) {
    switch (choice) {
      case "1":
        this.handleAddition();
        break;

      case "2":
        this.handleSubtraction();
        break;

      case "3":
        this.handleMultiplication();
        break;

      case "4":
        this.handleDivision();
        break;

      case "5":
        this.showHistory();
        break;

      case "6":
        this.clearHistory();
        break;

      case "7":
        this.exit();
        break;

      default:
        this.handleInvalidChoice();
        break;
    }
  }

 exit() {
    console.log("Thank you for using the calculator. Goodbye!");
    this.running = false;
  }

  start() {
    while (this.running) {
      this.displayMenu();
      const choice = prompt("Enter your choice (1-7):");
      this.handleChoice(choice);
    }
    console.log("Program ended.");
  }
}

// Start the application
const app = new MenuSystem();
app.start();
