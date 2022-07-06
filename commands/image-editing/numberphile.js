import ImageCommand from "../../classes/imageCommand.js";

class NumberphileCommand extends ImageCommand {
  params = {
    template: "./assets/images/numberphile.png",
    compdim: "+135+140",
    resizedim: "360x350!"
  };

  static description = "Numberphile Funny. Laugh.";
  static aliases = [];

  static noImage = "You need to provide an image to fuck with!";
  static command = "template1";
}

export default NumberphileCommand;