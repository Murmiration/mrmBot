import ImageCommand from "../../classes/imageCommand.js";

class WalmartCommand extends ImageCommand {
  params = {
    template: "./assets/images/walmart.png",
    compdim: "+428+94",
    resizedim: "190x224!"
  };

  static description = "Walmart Funny. Laugh.";
  static aliases = [];

  static noImage = "You need to provide an image to fuck with!";
  static command = "template1";
}

export default WalmartCommand;