global.expect = require('expect');
global.jsdom = require('jsdom');
global.path = require('path');

before(done => {
  const src = path.resolve(__dirname, '..', 'index.js');

  jsdom.env('<div></div>', [src], (err, window) => {
    if (err) {
      return done(err);
    }

    Object.keys(window).forEach(key => {
      global[key] = window[key];
    });

    return done();
  });
});
