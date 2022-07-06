import ImageCommand from "../../classes/imageCommand.js";

class MyJesusCommand extends ImageCommand {
  params = {
    template: "./assets/images/myjesus.png",
    compdim: "+439+105",
    resizedim: "375x450!",
    origdim: "815x555!"
  };

  static description = "This is MY jesus!";
  static aliases = ["thisismyjesus"];

  static noImage = "You need to provide an image to fuck with!";
  static command = "template";
}

export default MyJesusCommand;