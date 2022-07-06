import ImageCommand from "../../classes/imageCommand.js";

class UglyCommand extends ImageCommand {
  params = {
    template: "./assets/images/ugly.png",
    compdim: "+0+0",
    resizedim: "191x270!",
    origdim: "373x598!",
    bgpath: "./assets/images/pixel.png"
  };

  static description = "This ugly SoB is-";
  static aliases = [];

  static noImage = "You need to provide an image to fuck with!";
  static command = "template";
}

export default UglyCommand;