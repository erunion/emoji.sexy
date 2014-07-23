emoji.sexy
=============

[emoji.sexy](http://emoji.sexy) is a URL shortener powered by emoji and [LevelDB](https://github.com/rvagg/node-levelup).

All URLs are comprised of 5 randomized emoji from the library of 800+ emoji in [emoji-lexicon](https://github.com/jonursenbach/emoji-lexicon).

There is currently very simple duplicate detection so the same URL does not generate two different emoji endpoints, however it is currently possible (though theoretically rare) for the same emoji endpoint to be generated more than once.

## Installation

```
npm install
npm start
```

## API
There is a built-in API for shortening URLs.

```
GET /shorten?url=:url
```

```
Status: 200 OK
Content-Type: application/json
Content:
{
  url: "http://localhost:3000/😐😐😐😐😐"
}
```
