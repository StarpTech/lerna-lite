"use strict";

// https://github.com/conventional-changelog/conventional-changelog/blob/b516084ef6a725197f148236c0ddbfae7ffe3e6f/packages/conventional-changelog-angular/conventional-recommended-bump.js
// (conventional-changelog-angular/conventional-recommended-bump.js, etc)
const parserOpts = require("./parser-opts");
const writerOpts = require("./writer-opts");
const whatBump = require("./what-bump");

// https://github.com/conventional-changelog/conventional-changelog/blob/943542f3b2342bb5933d84847fb19b727c607df0/packages/conventional-changelog-ember/index.js#L10
module.exports = presetOpts;

function presetOpts(cb) {
  process.nextTick(cb, null, {
    parserOpts,
    writerOpts,
    whatBump,
  });
}
