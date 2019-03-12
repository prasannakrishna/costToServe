/**
 * Copyright © 2018, JDA Software Group, Inc. ALL RIGHTS RESERVED.
 * <p>
 * This software is the confidential information of JDA Software, Inc., and is licensed
 * as restricted rights software. The use,reproduction, or disclosure of this software
 * is subject to restrictions set forth in your license agreement with JDA.
 */
const exec = require('child_process').exec;
exec('npm -v', (err, stdout, stderr) => {
  if (err) throw err;
  if (parseFloat(stdout) < 3) {
    throw new Error('[ERROR: React Boilerplate] You need npm version @>=3');
    process.exit(1);
  }
});
