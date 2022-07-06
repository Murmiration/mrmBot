import ImageCommand from "../../classes/imageCommand.js";

class JacksFilmsCommand extends ImageCommand {
  params = {
    template: "./assets/images/jacksfilms.png",
    compdim: "+456+356",
    resizedim: "352x257!",
    origdim: "1200x675!"
  };

  static description = "Jacksfilms";
  static aliases = ["jack"];

  static noImage = "You need to provide an image to fuck with!";
  static command = "template";
}

export default JacksFilmsCommand;