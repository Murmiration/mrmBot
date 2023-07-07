import ImageCommand from "../../classes/imageCommand.js";

class JJoSCommand extends ImageCommand {
  static category = "image-editing"
  static description = "JJoS an image";

  params = {
    assetPath: "assets/images/jjos.png",
    distortPath: "assets/images/jjosmap.png",
    compx: 261,
    compy: 126
  };

  static aliases = ["hacker"];

  static noImage = "You need to provide an image/GIF to JJoS!";
  static command = "scott";
}

export default JJoSCommand;