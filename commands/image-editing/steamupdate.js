import ImageCommand from "../../classes/imageCommand.js";

class SteamUpdateCommand extends ImageCommand {
  params = {
    template: "./assets/images/steamupdate.png",
    compdim: "+23+183",
    resizedim: "410x322!",
    origdim: "460x518!",
    bgpath: "./assets/images/blackpixel.png"
  };

  static description = "Looks like your Steam client has an update!";
  static aliases = [];

  static noImage = "You need to provide an image to fuck with!";
  static command = "template";
}

export default SteamUpdateCommand;