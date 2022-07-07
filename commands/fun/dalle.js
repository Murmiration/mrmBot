import fetch from "node-fetch";
import Command from "../../classes/command.js";
import { formatTime, safeString } from "../../utils/hfutils.js";

// Some code shamelessly ripped from Cynosphere's bot HiddenPhox
// https://gitlab.com/Cynosphere/HiddenPhox/-/blob/rewrite/src/modules/misc.js#L403-460

class DalleCommand extends Command {
  async run() {
    if (this.args.length === 0) {
      return "You need to provide some text for the ai to generate!";
    }
    this.client.sendChannelTyping(this.message.channel.id);
    let inputprompt = this.args.join(" ")
    let funny = {
      "headers": {
        "accept": "application/json",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/json",
      },
      "body": JSON.stringify({prompt: inputprompt}),
      "method": "POST"
    }
    const start = Date.now();
    let retries = 0;  

    let request = await fetch("https://backend.craiyon.com/generate", funny);
    while (request.status !== 200) {
      request = await fetch("https://backend.craiyon.com/generate", funny);
      // console.log(request.status)
      retries++;
    }
    let jsonobj = await request.json();
    // let images = await jsonobj.images.map((img) => Buffer.from(img, "base64")).map((img, index) => ({file: img, name: `${index}.jpg`}));
    // const out = {
    //   content: `Generated in ${formatTime(Date.now() - start)}${
    //     retries > 0 ? " with " + retries + " retries" : ""
    //   }`,
    //   // file: images,
    //   embeds: [],
    // };
    // let splitIndex = 0;
    // const title = `Responses for "${safeString(inputprompt)}"`;
    // for (const index in images) {
    //   if (index % 3 == 0) splitIndex++;
    //   out.embeds.push({
    //     title,
    //     url: "https://www.craiyon.com/?" + splitIndex,
    //     image: {
    //       url: `attachment://${index}.jpg`,
    //     },
    //   });
    // }
    // await this.client.createMessage(this.message.channel.id, out, images);
    let imgs = await jsonobj.images.map(r => Buffer.from(r, 'base64'));
    for(let i = 0; i < imgs.length; i++) {
      await this.client.createMessage(this.message.channel.id, `Repsonse ${i+1} from prompt: ${inputprompt}`, {file: imgs[i], name: `${i}.png`});
    }
    // return out;
    return;
  }

  static description = "Generates an Image based on your prompt";
  static aliases = ["generate"];
  static arguments = [];
}

export default DalleCommand;