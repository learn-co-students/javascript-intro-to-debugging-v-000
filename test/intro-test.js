const expect = require('expect');
const jsdom = require('jsdom');
const path = require('path');

describe("Mocha walkthrough", () => {
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

  describe('sayHey()', () => {
    it('returns the string "Hey!"', () => {
      expect(sayHey()).toEqual("Hey!");
    });
  });

  describe('sayHeyFriend(name)', () => {
    it("return the string 'Hey, ${name}!'", () => {
      expect(sayHeyFriend("Kristin")).toBe("Hey, Kristin!");
    });
  });
});
