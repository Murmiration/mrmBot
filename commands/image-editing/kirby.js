import ImageCommand from "../../classes/imageCommand.js";

class KirbCommand extends ImageCommand {
  params = {
    template: "./assets/images/kirby.png",
    compdim: "+82+72",
    resizedim: "428x308!",
    origdim: "704x528!"
  };

  static description = "Kirby Do The Funny Point";
  static aliases = ["kirb"];

  static noImage = "You need to provide an image to fuck with!";
  static command = "template";
}

export default KirbCommand;