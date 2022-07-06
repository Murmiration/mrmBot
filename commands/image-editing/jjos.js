import ImageCommand from "../../classes/imageCommand.js";

class JJoSCommand extends ImageCommand {
  params = {
    distortcoords: [0,0,20,0,170,0,178,15,0,119,1,99,170,119,153,129],
    template: "./assets/images/jjos.png",
    compdim: "+256+118",
    resizedim: "170x119!",
    origdim: "450x311!"
  };

  static description = "JJoS";
  static aliases = ["hacker"];

  static noImage = "You need to provide an image to fuck with!";
  static command = "jjos";
}

export default JJoSCommand;