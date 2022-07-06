import ImageCommand from "../../classes/imageCommand.js";

class SafetyDoorCommand extends ImageCommand {
  params = {
    distortcoords: [0,0,0,0,352,0,352,0,0,218,0,208,352,218,331,218],
    template: "./assets/images/safety.png",
    compdim: "+57+0",
    resizedim: "352x218!",
    origdim: "420x600!"
  };

  static description = "Lock it safely away.";
  static aliases = ["safetydoor"];

  static noImage = "You need to provide an image to fuck with!";
  static command = "jjos";
}

export default SafetyDoorCommand;