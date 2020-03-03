const gm = require("gm").subClass({
  imageMagick: true
});

exports.run = async (message) => {
  message.channel.sendTyping();
  const image = await require("../utils/imagedetect.js")(message);
  if (image === undefined) return `${message.author.mention}, you need to provide an image to mirror!`;
  const data = `/tmp/${Math.random().toString(36).substring(2, 15)}.miff`;
  const data2 = `/tmp/${Math.random().toString(36).substring(2, 15)}.miff`;
  await gm(image.path).coalesce().gravity("West").crop("50%", 0).out("+repage").writePromise(data2);
  await gm(data2).flop().writePromise(data);
  const buffer = await gm(data2).extent("%[fx:u.w*2]", "%[fx:u.h]").out("null:").out(data).gravity("East").out("-layers", "Composite").bufferPromise(image.type);
  return message.channel.createMessage("", {
    file: buffer,
    name: `haah.${image.type}`
  });
};

exports.aliases = ["magik4", "mirror2"];
exports.category = 5;
exports.help = "Mirrors the left side of an image onto the right";