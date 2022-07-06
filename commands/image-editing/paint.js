import ImageCommand from "../../classes/imageCommand.js";

class PaintCommand extends ImageCommand {
  params = {
    distortcoords: [0,0,0,0,400,0,343,17,0,330,54,329,400,330,400,271],
    template: "./assets/images/paint.png",
    compdim: "+141+79",
    resizedim: "400x330!",
    origdim: "1024x544!"
  };

  static description = "Let idubbbz paint you a picture!";
  static aliases = ["idubbz"];

  static noImage = "You need to provide an image to fuck with!";
  static command = "jjos";
}

export default PaintCommand;