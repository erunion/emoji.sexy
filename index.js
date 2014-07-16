'use strict';

var url = require('url');
var levelup = require('levelup');

var db = levelup('./db');

var restify = require('restify');
var server = restify.createServer();

server.use(restify.queryParser({mapParams: false}));

server.get('/shorten', function (req, res, next) {
  if (typeof req.query.url === 'undefined') {
    return next(new restify.InvalidArgumentError('URL parameter not supplied.'));
  }

  var url = require('url');
  var emoji = require('./emojid');

  try {
    if (url.parse(req.query.url).host === null) {
      return next(new restify.InvalidArgumentError('Invalid URL supplied.'));
    }

    var shortenedId = emoji(8);

    db.put(shortenedId, req.query.url, function (err) {
      if (err) {
        return next(err);
      }

      res.send(200, {
        url: 'http://' + req.headers.host + '/' + shortenedId
      });

      res.end();
    });
  } catch (err) {
    return next(err);
  }
});

server.get(/\/(.*)/i, function (req, res, next) {
  db.get(decodeURIComponent(req.params[0]), function (err, value) {
    if (err) {
      if (err.notFound) {
        res.send(404, 'Not found.');
        res.end();
        return;
      }

      return next(err);
    }

    res.header('Location', value);
    res.send(303);
    res.end();
  });
});

server.listen(process.env.PORT || 3000);
