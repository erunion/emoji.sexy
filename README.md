emojiurl
=============

A URL shortener powered by emoji and LevelDB.

## Installation
`npm install`

## Running it
`node index.js`

Pass the URL you want shortened into `http://localhost:3000/shorten?url=` and you'll get back a response like:

```
{
  url: "http://localhost:3000/😄🔫🚯🆔〽👶🚒📶"
}
```

Hit http://localhost:3000/😄🔫🚯🆔〽👶🚒📶 and go to your URL!
