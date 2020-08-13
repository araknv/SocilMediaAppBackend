
// ADD YOUR OWN KEYS AND RENAME THIS FILE TO keys.js
const TWITTER_TOKENS = {
  TWITTER_CONSUMER_KEY: "you wish",
  TWITTER_CONSUMER_SECRET: "you wish",
  TWITTER_ACCESS_TOKEN: "you wish",
  TWITTER_TOKEN_SECRET: "you wish"
};

const DB_USER = "you wish";
const DB_PASSWORD = "you wish";
const DB_NAME = "you wish"
const MONGODB = {
  MONGODB_URI: `you wish`
};

const SESSION = {
  COOKIE_KEY: "you wish"
};

const KEYS = {
  ...TWITTER_TOKENS,
  ...MONGODB,
  ...SESSION
};

module.exports = KEYS;