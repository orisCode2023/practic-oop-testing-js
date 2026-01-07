import readlineSync from "readline-sync";

export class CliMenu {
  // ======================
  // GUEST MENU
  // ======================
  showGuestMenu() {
    console.log("\n=== Mini Vault ===");
    console.log("1. Register");
    console.log("2. Login");
    console.log("3. Exit");

    const choice = readlineSync.question("Choose an option: ");
    return this.handleGuestChoice(choice);
  }

  handleGuestChoice(choice) {
    switch (choice) {
      case "1":
        return { action: "REGISTER" };

      case "2":
        return { action: "LOGIN" };

      case "3":
        return { action: "EXIT" };

      default:
        console.log("❌ Invalid option. Please try again.");
        return { action: "GUEST_MENU" };
    }
  }

  // ======================
  // LOGGED-IN MENU
  // ======================
  showUserMenu(username) {
    console.log(`\n=== Welcome, ${username} ===`);
    console.log("1. Add note");
    console.log("2. List notes");
    console.log("3. Delete note");
    console.log("4. Logout");

    const choice = readlineSync.question("Choose an option: ");
    return this.handleUserChoice(choice);
  }

  handleUserChoice(choice) {
    switch (choice) {
      case "1":
        return { action: "ADD_NOTE" };

      case "2":
        return { action: "LIST_NOTES" };

      case "3":
        return { action: "DELETE_NOTE" };

      case "4":
        return { action: "LOGOUT" };

      default:
        console.log("❌ Invalid option. Please try again.");
        return { action: "USER_MENU" };
    }
  }

  // ======================
  // INPUT HELPERS
  // ======================
  askCredentials() {
    const username = readlineSync.question("Username: ");
    const password = readlineSync.question("Password: ", {
      hideEchoBack: true,
    });

    return { username, password };
  }

  askNoteText() {
    return readlineSync.question("Enter note text: ");
  }

  askNoteId() {
    return readlineSync.question("Enter note ID to delete: ");
  }

  // ======================
  // OUTPUT HELPERS
  // ======================
  showMessage(message) {
    console.log(message);
  }

  showNotes(notes) {
    if (notes.length === 0) {
      console.log("📭 No notes found.");
      return;
    }

    console.log("\n📒 Your Notes:");
    notes.forEach((note) => {
      console.log(`- [${note.id}] ${note.text}`);
    });
  }
}