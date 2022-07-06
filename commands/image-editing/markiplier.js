import ImageCommand from "../../classes/imageCommand.js";

class MarkiplierCommand extends ImageCommand {
  params = {
    water: "./assets/images/markiplier.png",
    gravity: 1,
    resize: false
  };

  static description = "Adds a sad Markiplier to an image";
  static aliases = ["markpliers"];

  static noImage = "You need to provide an image to add a sad Markiplier!";
  static command = "watermark";
}

export default MarkiplierCommand;