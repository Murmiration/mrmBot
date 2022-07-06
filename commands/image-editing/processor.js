import ImageCommand from "../../classes/imageCommand.js";

class ProcessorCommand extends ImageCommand {
  params = {
    template: "./assets/images/processor.png",
    compdim: "+495+335",
    resizedim: "74x76!",
    origdim: "1200x675!"
  };

  static description = "Intel Processor Funny. Laugh.";
  static aliases = ["intel"];

  static noImage = "You need to provide an image to fuck with!";
  static command = "template";
}

export default ProcessorCommand;