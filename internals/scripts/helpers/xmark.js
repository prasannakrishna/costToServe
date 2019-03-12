/**
 * Copyright © 2018, JDA Software Group, Inc. ALL RIGHTS RESERVED.
 * <p>
 * This software is the confidential information of JDA Software, Inc., and is licensed
 * as restricted rights software. The use,reproduction, or disclosure of this software
 * is subject to restrictions set forth in your license agreement with JDA.
 */
const chalk = require('chalk');

/**
 * Adds mark cross symbol
 */
function addXMark(callback) {
  process.stdout.write(chalk.red(' ✘'));
  if (callback) callback();
}

module.exports = addXMark;
