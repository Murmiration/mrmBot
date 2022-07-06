import ImageCommand from "../../classes/imageCommand.js";

class MyJesusCommand extends ImageCommand {
  params = {
    template: "./assets/images/garfield.png",
    compdim: "+134+176",
    resizedim: "807x674!",
    origdim: "1080x1080!"
  };

  static description = "Remembering";
  static aliases = ["garfpaint"];

  static noImage = "You need to provide an image to fuck with!";
  static command = "template";
}

export default MyJesusCommand;