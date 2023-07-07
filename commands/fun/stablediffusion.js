import fetch from "node-fetch";
import Command from "../../classes/command.js";
import { readFileSync } from "fs";
const { auto1111 } = JSON.parse(readFileSync(new URL("../../config/sd-api.json", import.meta.url)));

class StableDiffusionCommand extends Command {
  async run() {
    if (this.args.length === 0) {
      return "You need to provide some text for the ai to generate!";
    }
    let inputprompt = this.args.join(" ")
    let funny = {
      "headers": {
        "accept": "application/json",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/json",
      },
      "body": JSON.stringify({prompt: inputprompt, steps: 20}),
      "method": "POST"
    }
    const start = Date.now();
    let retries = 0;  

    let request = await fetch(`${auto1111}/sdapi/v1/txt2img`, funny);
    if (request.status == 502) {
      return {content: `Stable Diffusion Offline!`}
    }
    if (request.status !== 200) {
      return {content: `Request Failed!`}
    }

    let jsonobj = await request.json();

    let images = await jsonobj.images.map((img) => Buffer.from(img, "base64")).map((img, index) => ({contents: img, name: `${inputprompt}-${index}.png`}));

    return {content: `Results for: \`${inputprompt}\``, files: images};
  }

  static description = "Generates an Image based on your prompt using Automatic1111's Stabile Diffusion's WebUI API";
  static aliases = ["generate"];
  static arguments = [];
}

export default StableDiffusionCommand;