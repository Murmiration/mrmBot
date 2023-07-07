import fetch from "node-fetch";
import Command from "../../classes/command.js";

class PersonCommand extends Command {
  async run() {
    const request = await fetch("http://thispersondoesnotexist.com/");
    return {
      contents: await request.arrayBuffer(),
      name: "person.jpg"
    };
  }

  static description = "Generates a Person";
  static aliases = ["thispersondoesntexist", "persondoesntexist", "person"];
  static arguments = [];
}

export default PersonCommand;