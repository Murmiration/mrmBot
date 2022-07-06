import ImageCommand from "../../classes/imageCommand.js";

class MarioMirrorCommand extends ImageCommand {
  params = {
    distortcoords: [0,0,92,7,420,0,420,0,0,770,0,726,420,770,331,767],
    template: "./assets/images/mariomirror.png",
    compdim: "+656+279",
    resizedim: "420x770!",
    origdim: "1200x1200!"
  };

  static description = "Show mario's true self";
  // static aliases = ["hacker"];

  static noImage = "You need to provide an image to fuck with!";
  static command = "jjos";
}

export default MarioMirrorCommand;