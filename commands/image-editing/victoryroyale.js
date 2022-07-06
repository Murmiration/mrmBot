import ImageCommand from "../../classes/imageCommand.js";

class VictoryRoyaleCommand extends ImageCommand {
  params = {
    water: "./assets/images/victoryroyale.png",
    gravity: 2,
    resize: true
  };

  static description = "Gives an image that number one victory royale!";
  static aliases = ["fortnite"];

  static noImage = "You need to provide an image to add a Fortnite watermark!";
  static command = "watermark";
}

export default VictoryRoyaleCommand;