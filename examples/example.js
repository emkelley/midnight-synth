const { default: axios } = require("axios");
const ID = process.env.SPOTIFY_CLIENT_ID;
const SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const authBuffer = Buffer.from(`${ID}:${SECRET}`).toString("base64");

export const double = (number) => {
  const double = number * 2;
  return double;
};

const number = 1234;
let string = "string";
const bool = true;
let array = ["foo", "bar"];

function foo() {
  return array;
}

module.exports = {
  name: "song",
  aliases: ["music"],
  run: async (client, channel, userstate, context) => {
    axios({
      method: "POST",
      url: "https://accounts.spotify.com/api/token",
      headers: { Authorization: `Basic ${authBuffer}` },
      params: {
        grant_type: "refresh_token",
        refresh_token: process.env.SPOTIFY_AUTH_REFRESH_TOKEN,
      },
    }).then(({ data: { access_token } }) =>
      axios({
        method: "GET",
        url: "https://api.spotify.com/v1/me/player/currently-playing?",
        headers: { Authorization: "Bearer " + access_token },
      }).then(({ statusText, data: { item } }) => {
        if (statusText === "No Content") {
          const notPlaying = "0NEGUY's Spotify is not currently playing music";
          client.say(channel, notPlaying);
        } else {
          // item.external_urls.spotify
          const message = `catJAM We're listening to: ${item.name} by ${item.artists[0].name}`;
          client.say(channel, message);
        }
      })
    );
  },
};
