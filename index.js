request = require('request');

module.exports.getSubtitles = function (imdb_id, callback) {
  request('http://api.yifysubtitles.com/subs/' + imdb_id, function (error, response, body) {
    if(body.indexOf("<") > -1 || JSON.parse(body).subs === undefined) {
      callback("no subtitles", null);
    }
    else {
      callback(null, JSON.parse(body).subs[imdb_id]);
    }
  });
};
