import ImageCommand from "../../classes/imageCommand.js";

class MemerThirtyFourCommand extends ImageCommand {
  params = {
    distortcoords: [0,0,1,13,119,0,117,0,0,161,0,159,119,161,118,160],
    template: "./assets/images/memer34.png",
    compdim: "+310+30",
    resizedim: "119x161!",
    origdim: "474x346!"
  };

  static description = "Expose the truth about Memer34!";
  static aliases = ["predator"];

  static noImage = "You need to provide an image to fuck with!";
  static command = "jjos";
}

export default MemerThirtyFourCommand;