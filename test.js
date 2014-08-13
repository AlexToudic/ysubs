ysubs = require('./index')

//Should return subtitles for The Wizard of Oz
ysubs.getSubtitles('tt0032138', function(error, results) {
  if(error) {
    console.log(error);
  }
  else {
    console.log(results);
  }
});

//Should throw error "no subtitles"
ysubs.getSubtitles('9071832769', function(error, results) {
  if(error) {
    console.log(error);
  }
  else {
    console.log(results);
  }
});
