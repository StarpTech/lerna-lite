import log from 'npmlog';

import { exec, ExecOpts } from '@lerna-lite/core';

/**
 * Reset files modified by publish steps.
 * @param {string[]} stagedFiles
 * @param {{ granularPathspec: boolean; }} gitOpts
 * @param {import("@lerna/child-process").ExecOpts} execOpts
 */
export function gitCheckout(stagedFiles: string[], gitOpts: { granularPathspec: boolean; }, execOpts: ExecOpts, gitDryRun = false) {
  const files = (gitOpts.granularPathspec ? stagedFiles : '.') as string;

  log.silly('gitCheckout', files);

  return exec('git', ['checkout', '--'].concat(files), execOpts, gitDryRun);
}
