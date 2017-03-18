var fs = require('fs');
var crypto = require('crypto');
var path = require('path');
var url = require('url');


module.exports = function favicons(dir, opts) {
  dir = dir || process.cwd() + '/public';
  opts = opts || {};

  var cache = Object.create(null);
  var maxAge = opts.maxAge || 86400000;
  var filenames = [
    'favicon.ico',
    'favicon.png',
    'apple-touch-icon.png',
    'apple-touch-icon-precomposed.png',
    'apple-touch-icon-57x57.png',
    'apple-touch-icon-57x57-precomposed.png',
    'apple-touch-icon-72x72.png',
    'apple-touch-icon-72x72-precomposed.png',
    'apple-touch-icon-76x76.png',
    'apple-touch-icon-76x76-precomposed.png',
    'apple-touch-icon-114x114.png',
    'apple-touch-icon-114x114-precomposed.png',
    'apple-touch-icon-120x120.png',
    'apple-touch-icon-120x120-precomposed.png',
    'apple-touch-icon-144x144.png',
    'apple-touch-icon-144x144-precomposed.png',
    'apple-touch-icon-152x152.png',
    'apple-touch-icon-152x152-precomposed.png',
    'apple-touch-icon-180x180.png',
    'apple-touch-icon-180x180-precomposed.png',
    'favicon-16x16.png',
    'favicon-32x32.png',
    'favicon-128x128.png',
    'mstile-150x150.png',
    'safari-pinned-tab.svg'
  ];

  return function favicons(req, res, next) {
    var pathname = url.parse(req.url).pathname;
    var basename = path.basename(pathname);
    var index = filenames.indexOf(basename);
    var cached;
    var extname;

    if ( pathname.split('/').length > 2 ) {
      return next();
    }

    if ( index < 0 ) {
      return next();
    }

    extname = path.extname(basename);
    cached = cache[basename];

    if (cached) {
      res.set(cached.headers);
      res.send(cached.body);
      return;
    }

    fs.readFile(path.join(dir, req.path), function(err, buf) {
      if (err) {
        if (err.errno && err.errno === 34) {
          res.statusCode = 404;
        }

        return next(err);
      }

      cached = cache[basename] = {
        headers: {
          'Content-Type': extname === '.ico' ? 'image/x-icon' : 'image/'+extname.split('.').pop(),
          'Content-Length': buf.length,
          'ETag': '"' + crypto.createHash('md5').update(buf).digest("hex") + '"',
          'Cache-Control': 'public, max-age=' + (maxAge / 1000)
        },
        body: buf
      };

      res.set(cached.headers);
      res.send(cached.body);
    });
  };
};
