const oid = process.env.oid
const prefix = require('../config.json').prefix

module.exports.run = (bot, message, args) => {
  let auth = message.author.id
  if (auth == oid) {
    if (message.content == prefix + "test") {
      message.channel.send("Test Successful!")
    }
  }
  else {
    message.channel.send("Command is experimental. Owner only.")
  }
}

module.exports.help = {
  name: "test",
  usage: "h!test",
  information: "null"
}
